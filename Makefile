#########################
###    Environment    ###
#########################
export PATH := $(PWD)/bin:$(PATH)
SHELL=/bin/bash -e -o pipefail
THIS_FILE := $(lastword $(MAKEFILE_LIST))
pathsearch = $(firstword $(wildcard $(addsuffix /$(1),$(subst :, ,$(PATH)))))

MY_UID=$(shell id -u)
MY_GID=$(shell id -g)

BIN_PERL=$(call pathsearch,perl)
BIN_GIT=$(call pathsearch,git)
BIN_DOCKER=$(call pathsearch,docker)
BIN_NODE=$(call pathsearch,node)
BIN_NPM=$(call pathsearch,npm)
BIN_YARN=$(call pathsearch,yarn)
BIN_ZIP=$(call pathsearch,zip)
BIN_DOCKER=$(call pathsearch,docker)

BUILD_DIR := $(PWD)/dist

DOCKER_BASE=node:6
ARGUS_HOOK=https://argus.dev.grindr.io/
PROJECT_NAME=grindr.com
PROJECT_VERSION?=0.0.1
PROJECT_COMMIT=$(shell git rev-parse --short HEAD)

#########################
###      OUTPUT       ###
#########################

COLOR = \
	use Term::ANSIColor; \
	printf("    %s %s\n", colored(["BOLD $$ARGV[0]"], "[$$ARGV[1]]"), join(" ", @ARGV[2..$$\#ARGV]));

COLOR_SECTION = \
	use Term::ANSIColor; \
	printf("\n  %s\n\n", colored(["BOLD GREEN"], join(" ", @ARGV)));

COLOR_SECTION_INDENT = \
	use Term::ANSIColor; \
	printf("\n    %s\n\n", colored(["BOLD GREEN"], join("   ", @ARGV)));

COLOR_INDENT = \
	use Term::ANSIColor; \
	printf("        %s %s\n", colored(["BOLD $$ARGV[0]"], "[$$ARGV[1]]"), join(" ", @ARGV[2..$$\#ARGV]));

COLOR_WRAP = \
	use Term::ANSIColor; use Text::Wrap; \
	$$Text::Wrap::columns=128; $$Text::Wrap::separator="!!"; \
	$$INDENT = (length($$ARGV[1]) + 6 + 1); \
	@l = split(/!!/, wrap("", "", join(" ", @ARGV[2..$$\#ARGV]))); \
	printf("    %s %s\n", colored(["BOLD $$ARGV[0]"], "[$$ARGV[1]]"), shift(@l)); \
	for(@l) { printf("%s%s\n", " "x$$INDENT, $$_) };

HELP_FUNC = \
	use Term::ANSIColor; \
	%help; \
	while(<>) { \
		if(/^([a-z0-9_-]+):.*\#\#(?:@(\w+))?\s(.*)$$/) { \
			push(@{$$help{$$2}}, [$$1, $$3]); \
		} \
	}; \
	printf("%s: make [target]\n\n", colored(["BOLD"], "Usage")); \
	for ( sort keys %help ) { \
		printf("%s:\n", colored(["BOLD"], $$_)); \
		printf("  %-25s %s\n", $$_->[0], $$_->[1]) for @{$$help{$$_}}; \
		print "\n"; \
	}

COLOR_PIPE = 2>&1 | tr '\n' '\0' | xargs -0 -L 1 -- $(BIN_PERL) -e '$(COLOR)' "$1" "$2";
COLOR_PIPE_WRAP = 2>&1 | tr '\n' '\0' | xargs -0 -L 1 -- $(BIN_PERL) -e '$(COLOR_WRAP)' "$1" "$2";
COLOR_PIPE_INDENT = 2>&1 | tr '\n' '\0' | xargs -0 -L 1 -- $(BIN_PERL) -e '$(COLOR_INDENT)' "$1" "$2";

RED=\033[0;31m
GREEN=\033[0;32m
YELLOW=\033[01;33m
NC=\033[39m
BOLD=\033[1m
NB=\033[21m
RST=\033[0m

DUMP_VAR = $(BIN_PERL) -e '$(COLOR_WRAP)' "BLUE" "VAR" '$(var) = $($(var))';
DUMP_BIN = $(BIN_PERL) -e '$(COLOR_WRAP)' "BLUE" "BIN" '$(var) = $($(var))';
DUMP_CONST = $(BIN_PERL) -e '$(COLOR_WRAP)' "BLUE" "CONST" '$(var) = $($(var))';
DUMP_FLAG = $(BIN_PERL) -e '$(COLOR_WRAP)' "BLUE" "LINK" '$($(var))';

#########################
###      TARGETS      ###
#########################

.DEFAULT_GOAL := help
.PHONY: help banner

help: banner
	@$(BIN_PERL) -e '$(HELP_FUNC)' $(MAKEFILE_LIST)
	@echo "Use 'make help' for this message."

banner:
	@echo ""
	@echo -e "  $(YELLOW) .:c:;,,''''',;;:c;$(NC)                                                                $(RST)"
	@echo -e "  $(YELLOW) dddddddddddddddddx,$(NC)      ,ok00Ok.                                    .OO0k        $(RST)"
	@echo -e "  $(YELLOW) oddddddddddddddddd,$(NC)    oNMMMMMMX                                     lMMMK        $(RST)"
	@echo -e "  $(YELLOW) lddddddddddddddddd.$(NC)   KMMM0:..;',lkXx  .oOXWo 0KKx  :xKWMN0o   ;d0XXONMWM, ckKNX  $(RST)"
	@echo -e "  $(YELLOW) ;ddlllodddddollodd$(NC)   dMWMx  '0XMMMMMM,dMMMMM''MMMo KMMMO0MMMO,XMMMWMMMMMNlNMMMMd  $(RST)"
	@echo -e "  $(YELLOW) .x;    .od;     dl$(NC)   kMWM:  .WMNONMWMWMMMO.. kMWM.oMWM'  WMMMMMMo.  oMMMWMMMN,.   $(RST)"
	@echo -e "  $(YELLOW)  co'.  .odc.  .;x.$(NC)   'MMWW:   ..oWMMWMMMM.   WMMK NMMX  ;MMMMMWW.   :MMMMMWMl     $(RST)"
	@echo -e "  $(YELLOW)  .xxdoddddddoddxc$(NC)     ,XMMMWK0KWMMMOoMWMK   ;MWM:.MWMo  kMMM;NMMWkxKMMMxNMMM.     $(RST)"
	@echo -e "  $(YELLOW)   .ldxddddddxdo:$(NC)        :ONMMMMMXx, kMMMl   OMMM.xMMM.  WMMK .xXMMMMXx.;MMM0 ..   $(RST)"
	@echo -e "  $(YELLOW)      ':ISRE:'$(NC)              .....    ....    .... ....   ....    ....   ....       $(RST)"
	@echo ""


######################## TRAVIS #############################

.PHONY: travis travis-install travis-compile

travis: | banner clean travis-install travis-compile dist.zip done

travis-install:
	$(BIN_YARN) install $(call COLOR_PIPE,"BLUE","INSTALL")

travis-compile:
	$(BIN_YARN) run deploy:prod $(call COLOR_PIPE,"BLUE","BUILD")

######################## BUILD ##############################

dist.zip:
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Zipping dist folder"
	@cd $(BUILD_DIR) && $(BIN_ZIP) -r ../dist.zip * $(call COLOR_PIPE,"BLUE","ZIP")

######################## DOCKER #############################

.PHONY: docker docker-build docker-build-shell docker-inner-build docker-yarn docker-yarn-dep docker-yarn-compile

docker:
	@docker run -it --rm -v $(PWD):/build/grindr.com -w /build/grindr.com --entrypoint /bin/bash $(DOCKER_BASE)

docker-build: | banner clean docker-build-shell dist.zip done

docker-build-shell:
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Detecting any yarn caches"
	@YARNCACHE=""; if [ -d "$$HOME/Library/Caches/Yarn" ]; then \
     YARNCACHE="-v $$HOME/Library/Caches/Yarn:/root/.cache/yarn"; \
		 $(BIN_PERL) -e '$(COLOR)' "GREEN" "FOUND" "$$YARNCACHE"; \
   elif [ -d "$$HOME/.cache/yarn" ]; then \
    YARNCACHE="-v $$HOME/.cache/yarn:/root/.cache/yarn"; \
		$(BIN_PERL) -e '$(COLOR)' "GREEN" "FOUND" "$$YARNCACHE"; \
	 else \
	 	$(BIN_PERL) -e '$(COLOR)' "YELLOW" "NONE" "No Yarn cache detected (safe to ignore)"; \
   fi && docker run -it --rm \
		-e "DEBIAN_FRONTEND=noninteractive" \
		-e "HOST_UID=$(MY_UID)" -e "HOST_GID=$(MY_GID)" \
		-v $(PWD):/build/grindr.com $$YARNCACHE \
		-w /build/grindr.com \
		$(DOCKER_BASE) make docker-inner-build

docker-inner-build: | docker-bootstrap clean docker-yarn-dep docker-yarn-compile

docker-bootstrap: | docker-yarn

docker-yarn:
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Patching apt on this image to disable apt cache"
	@touch /etc/apt/apt.conf.d/99fixbadproxy
	@echo "Acquire::http::Pipeline-Depth 0;" |tee -a /etc/apt/apt.conf.d/99fixbadproxy $(call COLOR_PIPE,"BLUE","PATCH")
	@echo "Acquire::http::No-Cache true;" | tee -a /etc/apt/apt.conf.d/99fixbadproxy $(call COLOR_PIPE,"BLUE","PATCH")
	@echo "Acquire::BrokenProxy    true;" | tee -a /etc/apt/apt.conf.d/99fixbadproxy $(call COLOR_PIPE,"BLUE","PATCH")
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Cleaning up this images apt cache"
	@apt-get clean
	@$(BIN_PERL) -e '$(COLOR)' "BLUE" "CLEAN" "OK"
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Updating apt cache"
	@apt-get update $(call COLOR_PIPE,"BLUE","UPDATE")
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Installing apt transport utils"
	@apt-get -yq install apt-utils apt-transport-https $(call COLOR_PIPE,"BLUE","INSTALL")
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Installing yarn pubkey.gpg"
	@curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - $(call COLOR_PIPE,"BLUE","INSTALL")
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Installing yarn APT repository"
	@echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list $(call COLOR_PIPE,"BLUE","INSTALL")
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Cleaning package cache to avoid hash mismatches"
	@rm -rf -v /var/lib/apt/lists/* $(call COLOR_PIPE,"BLUE","CLEAN")
	@apt-get clean
	@$(BIN_PERL) -e '$(COLOR)' "BLUE" "CLEAN" "OK"
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Updating apt cache"
	@apt-get update $(call COLOR_PIPE,"BLUE","UPDATE")
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Installing yarn"
	@apt-get -yq install yarn $(call COLOR_PIPE,"BLUE","UPDATE")

docker-yarn-dep:
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Installing project dependencies"
	@mkdir /build/grindr.com/node_modules
	@yarn install $(call COLOR_PIPE,"BLUE","BUILD")
	@chown -R $$HOST_UID:$$HOST_GID /build/grindr.com/node_modules
	@if [ -d "/build/grindr.com/node_modules/.cache" ]; then \
		chown -R $$HOST_UID:$$HOST_GID /build/grindr.com/node_modules/.cache; \
	 fi

docker-yarn-compile:
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Compiling project"
	@mkdir /build/grindr.com/dist
	@yarn run deploy:prod $(call COLOR_PIPE_WRAP,"BLUE","INSTALL")
	@chown -R $$HOST_UID:$$HOST_GID /build/grindr.com/dist

######################### CLEAN #############################

.PHONY: clean

clean:
	@SECPRINT=0; for c in $(PWD)/dist.zip $(PWD)/dist $(PWD)/node_modules; do \
		if [ -d "$$c" ] || [ -f "$$c" ]; then \
			if [ "$$SECPRINT" == "0" ]; then \
				$(BIN_PERL) -e '$(COLOR_SECTION)' "Cleaning artifacts"; SECPRINT=1; \
			fi; \
			rm -rf $$c; $(BIN_PERL) -e '$(COLOR)' "CYAN" "CLEAN" "$$c"; \
		fi; \
	 done

######################### DEBUG #############################

.PHONY: done

done:
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Done"

dump:
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Dump Make Runstate..."
	@$(foreach var, $(filter RUNSTATE_%,$(.VARIABLES)), $(call DUMP_VAR,$(v)))
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Dump Make Constants..."
	@$(foreach var, $(filter CONST_%,$(.VARIABLES)), $(call DUMP_CONST,$(v)))
	@$(BIN_PERL) -e '$(COLOR_SECTION)' "Dump Make Program path variables..."
	@$(foreach var, $(filter BIN_%,$(.VARIABLES)), $(call DUMP_BIN,$(v)))
	@echo ""

print-%:
	@echo '$*=$($*)'
	@echo '  origin = $(origin $*)'
	@echo '  flavor = $(flavor $*)'
	@echo '   value = $(value  $*)'
