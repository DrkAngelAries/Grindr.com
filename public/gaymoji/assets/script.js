window.onload = function(){


	({
		lang : 'en',
		container : document.getElementById("container"),
		dropdown : document.getElementById('lang'),

		init: function(){
			let _this = this
			var QueryString = function () {
				// This function is anonymous, is executed immediately and 
				// the return value is assigned to QueryString!
				var query_string = {};
				var query = window.location.search.substring(1);
				var vars = query.split("&");
				for (var i=0;i<vars.length;i++) {
					var pair = vars[i].split("=");
					// If first entry with this name
					if (typeof query_string[pair[0]] === "undefined") {
						query_string[pair[0]] = decodeURIComponent(pair[1]);
						// If second entry with this name
					} else if (typeof query_string[pair[0]] === "string") {
						var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
						query_string[pair[0]] = arr;
						// If third or later entry with this name
					} else {
						query_string[pair[0]].push(decodeURIComponent(pair[1]));
					}
				} 
				return query_string;
			}();

			console.log('QueryString.lang',QueryString.lang)
			if (window.location.href.search("[?&]lang=") != -1){

				this.lang = QueryString.lang
			}else{
				this.lang = 'en'
			}

			if (window.location.pathname!=='/gaymoji/'){
				this.dropdown.addEventListener('change', function(){
					_this.lang = _this.dropdown.value
					_this.loadPageData(_this.lang)
				})
				this.loadPageData()
			}
		},

		buildDropDown: function(item){
			console.log(item)
			let _this = this
			//Reset dropdown
			this.dropdown.options.length = 0

			item[0].children.map((b) => {
				//This gets the select element and appends option elements to it 
				let langChild = document.createElement('option')

				//This populates the option elements with content and adds value attributes 
				langChild.innerHTML = b.title
				langChild.setAttribute('value', b.slug)
				_this.dropdown.appendChild(langChild)

				//display content
				if(_this.lang===b.slug){
					_this.container.innerHTML=b.content 

					// Add ?lang= to location bar in case of reload
					window.history.pushState("object", b.title, '?lang='+_this.lang);
				}
			})
			// Set Dropdown value
			this.dropdown.value = this.lang
		},

		parseData: function(data){
			// Get only the "app" object
			let app = data.pages.filter((a, i) => a.title === 'App')

			let current = app[0].children.filter((b, i) => {
				//Filtering out the currect legal page object
				switch (location.pathname) {
					case '/gaymoji/privacy-policy/':
						return b.slug === 'privacy-policy'
						break
						case '/gaymoji/terms-of-service/':
						return b.slug === 'terms-of-service'
						break
						case '/gaymoji/guidelines/':
						return b.slug === 'guidelines'
						break
						default:
						break
										 }
			})
			this.buildDropDown(current)
		},

		loadPageData: function(){
			const DOMAIN = window.location.hostname
			let _this = this
			this.dropdown.value = this.lang
			let xmlhttp = new XMLHttpRequest()
			let url = null
			if(DOMAIN==='www.grindr.com'){
				url = '../../data/pages.json'
			}else{
				console.log('DEV ENVIRONMENT. API CALL WILL TAKE A FEW MOMENTS')
				url = 'https://wp.prod.grindrdev.com/api/?json=get_page_index'
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					let response = JSON.parse(this.responseText)
					_this.parseData(response)
				}
			}
			xmlhttp.open("GET", url, true)
			xmlhttp.send()
		}
	}).init()
}