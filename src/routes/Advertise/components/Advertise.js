import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Advertise.scss'
import { getImage, setSimpleBackgroundStyle, createMarkup } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import Download from '../assets/download.svg'
import Phone from '../assets/iphone.png'
import Mail from '../assets/mail.svg'
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
	const meta = {
		title: 'Advertise with Grindr',
		description: item.content,
		canonical: 'http://www.grindr.com/'+item.slug.toString(),
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: 'Advertise with Grindr',
			},
			itemProp: {
				name: 'Advertise with Grindr',
				description: item.content,
			},
			property: {
				'og:title': 'Advertise with Grindr',
				'og:type': 'article',
				'og:site_name': 'Gay Dating App & Social Network – Chat & Date on Grindr',

				'twitter:site': '@Grindr',
				'twitter:title': 'Advertise with Grindr',

			}
		},
		auto: {
			ograph: true
		}
    }

	return <DocumentMeta {...meta} />
}

export const Advertise = ({item}) => (
	<div className="advertise container page">
		{putMetaData(item)}
		<h1>{item.title}</h1>

		<div className="text_wrapper col-lg-4 kill-padding">

			<div dangerouslySetInnerHTML={createMarkup(item.content)} />

		</div>

		<div className="col-lg-4 phone_wrapper kill-padding">
			<img src={Phone} className="phone"/>
			<Link className="ad_buttons hidden-lg hidden-lg" to="/advertise-form">
				<img src={Mail}/>
				<span>Contact sales team</span>
			</Link>
			<a className="ad_buttons ad-terms hidden-lg hidden-lg" href="/terms/IAB_4As-tsandcs-FINAL.pdf">
				<img src={Download}/>
				<span>IAB Terms & Conditions</span>
			</a>
		</div>
		<div className="col-lg-4 icons_wrapper kill-padding">
			<div className="col-sm-6 col-md-12 col-lg-6 bullets kill-padding">
				<div className="points"><img className="icons" src="/img/icons/Person.svg"/>OVER 3 MILLION DAILY ACTIVE USERS</div>
				<div className="points"><img className="icons" src="/img/icons/Pin.svg"/>234 COUNTRIES AND TERRITORIES</div>
				<div className="points"><img className="icons" src="/img/icons/Check.svg"/>AVERAGE OF 50+ MINUTES IN-APP DAILY</div>
			</div>

			<div className="col-sm-6 col-md-12 col-lg-6 bullets kill-padding">
				<div className="points"><img className="icons" src="/img/icons/Location-arrow.svg"/>GEOTARGET CUSTOMERS</div>
				<div className="points"><img className="icons" src="/img/icons/Pencil.svg"/>18 LOGINS PER DAY</div>
				<div className="points"><img className="icons" src="/img/icons/Fav-Star.svg"/>75% GEN Z &amp; MILLENNIALS</div>
			</div>
		</div>
		<div className="text_wrapper col-lg-12 kill-padding">
			<Link className="col-lg-3 ad_buttons visible-lg visible-lg" to="/advertise-form">
				<img src={Mail}/>
				<span>Contact sales team</span>
			</Link>
			<a className="col-lg-3 ad_buttons visible-lg visible-lg" href="/terms/IAB_4As-tsandcs-FINAL.pdf">
				<img src={Download}/>
				<span>IAB Terms & Conditions</span>
			</a>
		</div>
	</div>
)

Advertise.propTypes = {
	item: React.PropTypes.object
}

export default Advertise

//	<div>
//	<a href="/adkit/US+Media+Kit+05.2014.pdf" download>
//		<img src={Download}/>
//		<span>Download Grindr Ad Kit</span>
//	</a>
//	</div>
