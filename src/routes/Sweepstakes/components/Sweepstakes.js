import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Sweepstakes.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const Sweepstakes = () => (
	<div className={'container page sweepstakes'}>
		<div className="page-content">
			<h1>
				GRINDR SWEEPSTAKES<br/>OFFICIAL RULES
			</h1>
			<p>
				1. <strong>HOW TO ENTER: NO PURCHASE NECESSARY. A PURCHASE WILL NOT INCREASE YOUR
				CHANCES OF WINNING.</strong> The Grindr Sweepstakes (the “Sweepstakes”) begins at
				12:00 a.m. Pacific Standard Time (PST) December 11, 2017 and ends 11:59
				p.m. PST on December 12, 2017 (“entry period.”) There is one way to enter.
				No other method of entry will be accepted.
			</p>
			<p>
				To enter during the entry period, follow Grindr on Instagram and tag at
				least two (2) friends in a comment within this designated giveaway post: <a href="https://www.instagram.com/p/BckxtO9n-d2/?taken-by=grindr&utm_source=Grindr&utm_medium=website&utm_campaign=Social%20Sweeps" target="_blank">Instagram post</a>. Entries must be completed by 11:59 p.m. PST on December 12, 2017.
				Limit one entry per person. Incomplete entries are void. Odds of winning
				depend upon the number of eligible entries received.
			</p>
			<p>
				Grindr assumes no responsibility for lost, late, misdirected, illegible or
				mutilated entries or for any computer, online, telephone, cable, network,
				electronic or Internet hardware or software malfunctions, failures,
				connections, availability, garbled or jumbled transmissions, service
				provider, Internet, web site, or other accessibility or availability
				issues, or unauthorized human intervention, or any technical malfunctions
				that may occur. Entrants must be the authorized account holder of the
				e-mail address submitted at the time of entry. “Authorized account holder”
				is defined as the natural person who is assigned to an e-mail address by an
				Internet access provider, online service provider, or other organization
				(e.g., business, educational institution, etc.) that is responsible for
				assigning e-mail addresses for the domain name associated with the
				submitted e-mail address.
			</p>
			<p>
				2. <strong>ELIGIBILITY:</strong> This Sweepstakes is open only to legal residents of the
				U.S. who are 18 years of age or older as of the date the Sweepstakes
				begins. Employees of Grindr or any other company involved in the
				Sweepstakes, their subsidiaries, affiliates, prize suppliers, and
				advertising and promotional agencies, and their immediate families (spouse,
				parents, children, siblings and their spouses) and individuals living in
				the same household as such employees or their family members are
				ineligible. This Sweepstakes is governed by the laws of California and is
				subject to all applicable federal, state, and local laws and regulations.
				The Sweepstakes is void where prohibited by law.
			</p>
			<p>
				3. <strong>RANDOM DRAWING:</strong> Winners will be selected by a random drawing from among
				all eligible entries received. The drawing will take place at Grind’s
				office with a mailing address of PO Box 69414, West Hollywood, CA 90069.
				Winner’s names will be published on Grindr’s Instagram within the giveaway
				post comments section. By participating, entrants agree to be bound by the
				Official Rules and the decisions of the judges, which shall be final and
				binding. Winners will be notified via Instagram direct message, email,
				mail, telephone, and/or by overnight courier.
			</p>
			<p>
				4. <strong>PRIZES:</strong> One (1) winner will be selected and will receive one (1) “Grindr
				Swag Bag,” which includes one (1) Drawstring bag, shirt, hat, stickers,
				and/or similar items (total approximate retail value $100.00). The prize
				cannot be exchanged for cash, and cannot be used in conjunction with any
				other promotion. Grindr reserves the right to substitute a prize of equal
				or greater value in the event the offered prize is unavailable. No
				substitution or transfer of prizes is permitted except as provided herein.
			</p>
			<p>
				5. <strong>GENERAL CONDITIONS:</strong> These rules set out the legally binding contract
				between entrant and Grindr in relation to the Sweepstakes. Entrant will be
				deemed to have accepted these terms by entering the Sweepstakes. All
				federal, state, and local taxes, fees and surcharges on prizes are the sole
				responsibility of the prize winners. Prize winners may be required to
				execute and return an Affidavit of Eligibility/Release of Liability/Prize
				Acceptance Form within seven (7) days following notification. Return of any
				prize and/or prize notification as undeliverable or failure of any entrant
				to comply with any Official Rules will result in disqualification and
				selection of an alternate winner.
			</p>
			<p>
				Winners grant Grindr the right to use and publish his or her legal name,
				image and state of residence online and in print, or any other media, in
				connection with the Sweepstakes. Except for winners who are residents of
				the State of Tennessee, acceptance of a prize constitutes permission for
				Grindr and its advertising and promotional agencies to use winners’ name,
				image, likenesses, photograph, and audio and visual recordings of winner
				for editorial, advertising and promotional purposes without payment of
				additional compensation unless prohibited by law. By entering, participant
				releases and holds harmless Grindr, Instagram their respective parent
				companies, subsidiaries, affiliates, directors, officers, employees,
				shareholders, attorneys, agents and representatives, advertising and
				promotional agencies, successors and assigns from any and all liability for
				any injuries, loss, claim, action, demand or damage of any kind arising
				from or in connection with the Sweepstakes or any prize won, any misuse or
				malfunction of any prize awarded, participation in any Sweepstakes related
				activity, or participation in the Sweepstakes.
			</p>
			<p>
				As a condition of entering in this Sweepstakes, entrant agrees that any and
				all disputes that cannot be resolved between and the parties, and causes of
				action arising out of or connected with this Sweepstakes shall be resolved
				exclusively on an individual basis, without resort to any form of class
				action, before a court of competent jurisdiction located in Los Angeles,
				California, which court shall apply the laws of the state of California
				without regard for rules of conflicts of law. In any such dispute, entrant
				shall, under no circumstances, be entitled to claim punitive, incidental,
				or consequential damages, or any other damages, including attorneys’ fees,
				other than entrant’s actual out-of-pocket expenses (if any) associated with
				participating in the Sweepstakes, and entrant hereby waives all rights to
				have damages multiplied or increased.
			</p>
			<p>
				CAUTION: ANY ATTEMPT BY AN ENTRANT OR ANY OTHER INDIVIDUAL TO DELIBERATELY
				DAMAGE ANY WEB SITE OR UNDERMINE THE LEGITIMATE OPERATION OF THE
				SWEEPSTAKES IS A VIOLATION OF CRIMINAL AND CIVIL LAWS AND SHOULD SUCH AN
				ATTEMPT BE MADE, GRINDR RESERVES THE RIGHT TO SEEK DAMAGES FROM ANY SUCH
				ENTRANT TO THE FULLEST EXTENT PERMITTED BY LAW.
			</p>
			<p>
				6. <strong>LIMITATIONS OF LIABILITY:</strong> Grindr and Instagram are not responsible for
				any incorrect or inaccurate information, whether caused by web site users
				or by any of the equipment or programming associated with or utilized in
				the Sweepstakes or by any technical or human error that may occur in the
				processing of submissions in the Sweepstakes, including but not limited to
				any misprints or typographical errors. Grindr and Instagram assume no
				responsibility for any error, omission, interruption, deletion, defect,
				delay in operation or transmission, communications line failure, theft or
				destruction or unauthorized access to, or alteration of, entries. Grindr
				and Instagram are not responsible for any problems or technical malfunction
				of any telephone network or lines, computer on-line-systems, servers or
				providers, computer equipment, software, failure of e-mail or players on
				account of technical problems or traffic congestion on the Internet or at
				any web site or combination thereof, including injury or damage to
				participants or to any other person’s computer related to or resulting from
				participating or downloading materials in this Sweepstakes. If, for any
				reason, the Sweepstakes is not capable of completion as planned, including
				by reason of infection by computer virus, bugs, tampering, unauthorized
				intervention, fraud, technical failures or any other causes beyond the
				control of Grindr which corrupt or affect the administration, security,
				fairness, integrity or proper conduct of this Sweepstakes, Grindr reserves
				the right at its sole discretion to cancel, terminate, modify or suspend
				the Sweepstakes.
			</p>
			<p>
				IN NO EVENT WILL GRINDR OR INSTAGRAM, THEIR PARENTS, AFFILIATES,
				SUBSIDIARIES, AND RELATED COMPANIES, ADVERTISING AND PROMOTIONAL AGENCIES,
				OR DIRECTORS, OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS AND REPRESENTATIVES,
				BE RESPONSIBLE OR LIABLE FOR ANY DAMAGES OR LOSSES OF ANY KIND, INCLUDING
				DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING OUT
				OF ENTRANT’S ACCESS TO AND USE OF THE INTERNET SITE <a href="https://www.instagram.com/p/BckxtO9n-d2/?taken-by=grindr&utm_source=Grindr&utm_medium=website&utm_campaign=Social%20Sweeps" target="_blank">INSTAGRAM POST</a> OR THE
				GRINDR APP OR THE DOWNLOADING FROM AND/OR PRINTING OF MATERIAL FROM SAID
				SITE OR APP. WITHOUT LIMITING THE FOREGOING, EVERYTHING ON THIS SITE AND
				APP IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR
				IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
				MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. SOME
				JURISDICTIONS MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR
				INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO SOME OF THE ABOVE LIMITATIONS OR
				EXCLUSIONS MAY NOT APPLY TO YOU. CHECK YOUR LOCAL LAWS FOR ANY RESTRICTIONS
				OR LIMITATIONS REGARDING THESE LIMITATIONS OR EXCLUSIONS
			</p>
			<p>
				7. <strong>LIST OF WINNERS:</strong> For a list of winners, after December 12 2017, mail a
				separate, self-addressed stamped envelope to: “Grindr Sweepstakes Winners,”
				PO Box 69176, West Hollywood, California 90069.
			</p>
			<p>
				8. <strong>SPONSOR:</strong> This Sweepstakes is sponsored by Grindr, PO Box 69176, West
				Hollywood, California 90069. It is not sponsored, endorsed, administered
				by, or associated with Instagram.
			</p>
			<p>
				9. <strong>PRIVACY:</strong> Any personal information entrant provides will be treated in
				accordance with Grindr’s privacy policy available at
				https://www.grindr.com/privacy-policy/.
			</p>
			<p>
				These terms together with our website terms of use and privacy policy
				constitute the whole legal agreement between entrant and Grindr with regard
				to any entrant’s entry in the Sweepstakes.
			</p>
			<p>
				<strong>Abbreviated Rules for Advertisements and Promotions of Sweepstakes</strong>
			</p>
			<p>
				NO PURCHASE NECESSARY. The Grindr Sweepstakes begins at 12:00 a.m. PST
				12/11/17 and ends 11:59 p.m. PST 12/12/17. Open only to U.S. residents who
				are 18 or older. To enter, follow Grindr on Instagram and tag at least two
				(2) friends. All entries must be made by 12/12/17 (PST). Go to
				www.grindr.com/sweepstakes for Official Rules, additional eligibility
				restrictions, prize descriptions/restrictions/ARVs and complete details.
				Void where prohibited by law. Sponsor: Grindr, PO Box 69176, West
				Hollywood, California 90069. Sweepstakes is not sponsored, endorsed,
				administered by, or associated with Instagram.
			</p>
		</div>
	</div>
)

export default Sweepstakes
