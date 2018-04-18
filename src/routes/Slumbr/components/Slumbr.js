import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Slumbr.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import DocumentMeta from 'react-document-meta'
import _ from '../../../components/Helpers/underscore'
import $ from 'jquery'
import slumbr_logo from '../assets/slumbr-logo.svg'
import stamp from '../assets/RSVP-stamp.png'
import to from '../assets/to.png'
import from from '../assets/from.png'
//import validate from 'jquery-validation'


const putMetaData = () => {
	const meta = {
		title: "Grindr |  Slumbr | NY Pride Weekend Saturday June 24th Till Sunday June 25th The Pines Club, Fire Island",
		description: "",
		canonical: "https://www.grindr.com/slumbr-2017/",
		meta: {
			charSet: "utf-8",
			name: {
				keywords: "Grindr |  Slumbr | NY Pride Weekend Saturday June 24th Till Sunday June 25th The Pines Club, Fire Island"
			},
			itemProp: {
				name: "Grindr |  Slumbr | NY Pride Weekend Saturday June 24th Till Sunday June 25th The Pines Club, Fire Island",
				description: "",
				canonical: "https://www.grindr.com/slumbr-2017/",
			},
			property: {
				"og:title": "Grindr |  Slumbr | NY Pride Weekend Saturday June 24th Till Sunday June 25th The Pines Club, Fire Island",
				"og:description": "",
				"og:type": "article",
				"og:site_name": "Gay Dating App & Social Network – Chat & Date on Grindr",
				"og:url": "https://www.grindr.com/slumbr-2017/",
				"og:image": "https://www.grindr.com/wp-content/uploads/slumbr-share-image.jpg",
				"twitter:site": "@Grindr",
				"twitter:image": "https://www.grindr.com/wp-content/uploads/slumbr-share-image.jpg",
				"twitter:title": "Grindr |  Slumbr | NY Pride Weekend Saturday June 24th Till Sunday June 25th The Pines Club, Fire Island",
				"twitter:card": "summary",
				"twitter:description": "",
			}
		},
		auto: {
			ograph: true
		}
	}
	return <DocumentMeta {...meta} />
}

//const validator = () => {
//	// Form Validation 
//	$( "#slumbrForm" ).validate({
//		rules: {
//			'entry.1690977018': {
//				required: true,
//			}
//		},
//		messages: {
//			'entry.1690977018': {
//				required: 'Select at least one event.',
//			}
//		}
//	});
//}

const submitted = () => {
	let submitted=true;
	$('.form_container').fadeOut(function(){
		$('body').addClass('submitted')
		$('body.submitted .submitted_section').fadeIn()
	})
}

const iframe = () => {
	let submitted = false;
}

export const Slumbr = () => (
	<div className={'container page slumbr'}>
		{/*validator()*/}
		{putMetaData()}
		<div className="slumbr_inner">
				<div className="col-sm-6 kill-padding">
					<img className="hidden-xs" src={to}/>
					<img className="logo" src={slumbr_logo}/>
					<div className="event_info">NY PRIDE WEEKEND
						<br/>Saturday June 24th<br/>till<br/>Sunday June 25th<br/>THE PINES CLUB, FIRE ISLAND
					</div>
					<img className="stamp" src={stamp}/>
				</div>
				<div className="col-sm-6 kill-padding">
					<div className="form_container">
						<img className="hidden-xs" src={from}/>
						<iframe name="hidden_iframe" id="hidden_iframe" onLoad={()=>iframe()}></iframe>
						<form id="slumbrForm" action="https://docs.google.com/forms/d/e/1FAIpQLSeg51WIYHnNnIFMFaD1nfy_a1I7sWrecXvqKQkcCdyB-pawpA/formResponse" method="post" target="hidden_iframe" onSubmit={()=>submitted()}>
							<div className="form_section">
								<label htmlFor="fname">Name (First): <span className="asterisk">*</span></label>
								<input type="text" id="fname" name="entry.1629671288" minLength="2" required autoFocus />
							</div>
							<div className="form_section">
								<label htmlFor="lname">Name (Last): <span className="asterisk">*</span></label>
								<input type="text" id="lname" name="entry.1837444940" minLength="2" required />
							</div>
							<div className="form_section">
								<label htmlFor="email">Email: <span className="asterisk">*</span></label>
								<input type="email" id="email" name="entry.1390441737" required />
							</div>
							<div className="form_section">
								<label htmlFor="affiliation">Affiliation:</label>
								<input type="text" id="affiliation" name="entry.911847354" />
							</div>
							<div className="form_section checkbox_section">
								<label>Get registered:<span className="asterisk">*</span><br/><span className="special-note">(please choose at least one event)</span></label>
								<br/>
								<input type="checkbox" id="event1" name="entry.1690977018" value="Sat 1pm Event" />
								<label htmlFor="event1">Saturday june 24th 1-5p<br/>Visionaireworld camp activities<br/>daytime bbq + pool party</label>
								<br/>
								<input type="checkbox" id="event2" name="entry.1690977018" value="Sat 9pm Event" />
								<label htmlFor="event2">Saturday june 24th 9-2a<br/>Camp "formal"</label>
								<br/>
								<input type="checkbox" id="event3" name="entry.1690977018" value="Sunday Brunch" />
								<label htmlFor="event3">Sunday june 25th 9-1a<br/>Hangover brunch + infirmary</label>
							</div>
							<div className="form_section">
								<label>Who's in your squad?</label>
								<br/>
								<label htmlFor="gname1">CAMPER #1 (name: first, last):</label>
								<br/>
								<input type="text" id="gname1" name="entry.2062383781" minLength="2" />
								<br/>
								<label htmlFor="gname2">CAMPER #2 (name: first, last):</label>
								<br/>
								<input type="text" id="gname2" name="entry.1576501832" minLength="2" />
							</div>
							<input id="submit" type="submit" value="" />
						</form>
					</div>
					<div className="submitted_section">
						<p>Your form has been submitted.</p>
					</div>
				</div>
		</div>
	</div>
)

export default Slumbr
