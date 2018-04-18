import React from 'react'
import { IndexLink, Link } from 'react-router'
import './PrideRide.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import DocumentMeta from 'react-document-meta'
import _ from '../../../components/Helpers/underscore'
import pride_ride from '../assets/pride_ride.svg'
import pride_ride_map from '../assets/pride_ride_map.png'
import pride_ride_gaymoji1 from '../assets/rooney_adam.svg'


const putMetaData = () => {
	const meta = {
		title: "Grindr |  Pride Ride | New York to Washington, D.C. Sunday, June 11",
		description: "The Pride Ride is an inclusive, easily accessible, and CHEAP way to get to the March for Equality in Washington D.C. on Sunday, June 11th. A fleet of special buses will provide safe round trip transportation from NYC directly to the March so you can be a part of this historic day. Jump on, make new friends, and make your voice heard.",
		canonical: "https://www.grindr.com/pride-ride/",
		meta: {
			charSet: "utf-8",
			name: {
				keywords: "Grindr |  Pride Ride | New York to Washington, D.C. Sunday, June 11"
			},
			itemProp: {
				name: "Grindr |  Pride Ride | New York to Washington, D.C. Sunday, June 11",
				description: "The Pride Ride is an inclusive, easily accessible, and CHEAP way to get to the March for Equality in Washington D.C. on Sunday, June 11th. A fleet of special buses will provide safe round trip transportation from NYC directly to the March so you can be a part of this historic day. Jump on, make new friends, and make your voice heard.",
				canonical: "https://www.grindr.com/pride-ride/",
			},
			property: {
				"og:title": "Grindr |  Pride Ride | New York to Washington, D.C. Sunday, June 11",
				"og:description": "The Pride Ride is an inclusive, easily accessible, and CHEAP way to get to the March for Equality in Washington D.C. on Sunday, June 11th. A fleet of special buses will provide safe round trip transportation from NYC directly to the March so you can be a part of this historic day. Jump on, make new friends, and make your voice heard.",
				"og:type": "article",
				"og:site_name": "Gay Dating App & Social Network – Chat & Date on Grindr",
				"og:url": "https://www.grindr.com/pride-ride/",
				"og:image": "https://www.grindr.com/wp-content/uploads/PrideRide_share_image.jpg",
				"twitter:site": "@Grindr",
				"twitter:image": "https://www.grindr.com/PrideRide_share_image.jpg",
				"twitter:title": "Grindr |  Pride Ride | New York to Washington, D.C. Sunday, June 11",
				"twitter:card": "summary",
				"twitter:description": "The Pride Ride is an inclusive, easily accessible, and CHEAP way to get to the March for Equality in Washington D.C. on Sunday, June 11th. A fleet of special buses will provide safe round trip transportation from NYC directly to the March so you can be a part of this historic day. Jump on, make new friends, and make your voice heard.",
			}
		},
		auto: {
			ograph: true
		}
	}
	return <DocumentMeta {...meta} />
}

export const PrideRide = () => (
	<div className={'container page pride-ride'}>
		{putMetaData()}
		<div className="pr-header row">
			<div className="col-md-5">
				<img className="pr-logo" src={pride_ride}/>
			</div>
			<div className="col-md-5">
				<img className="pr-gaymoji1 hidden-xs hidden-sm" src={pride_ride_gaymoji1}/>
				<div className="pr-location">New york to washington, D.C.</div>
				<div className="pr-date">Sunday, June 11</div>
			</div>
			<div className="col-md-2">
				<ul className="pr-nav">
					<li><a href="https://salsa4.salsalabs.com/o/51171/p/salsa/donation/common/public/?donate_page_KEY=8966" target="_blank">Donate Now</a></li>
					<li><a href="http://www.transequality.org/about" target="_blank">About NCTE</a></li>
					<li><a href="https://itunes.apple.com/us/app/gaymoji-by-grindr/id1204006247?mt=8" target="_blank">Get the Pridepack</a></li>
					<li><a href="http://equalitymarch2017.org/" target="_blank">The March</a></li>
				</ul>
			</div>
		</div>
		<div className="pr-video-wrapper">
			<div className="pr-video">
				<iframe src="https://player.vimeo.com/video/219762423" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</div>
		<div className="page-content">
			<h1>You’re marching. We’re driving.</h1>
			<p>The Pride Ride is an inclusive, easily accessible, and CHEAP way to get to the March for Equality in Washington D.C. on <span>Sunday, June 11th</span>. A fleet of special buses will provide safe round trip transportation from NYC directly to the March so you can be a part of this historic day. Jump on, make new friends, and make your voice heard.</p>
			<p>To get on the bus, Grindr for Equality is collecting payments of just $5 per rider. For every rider who joins the Pride Ride, Grindr for Equality will be making a $5 contribution to the National Center For Transgender Equality, the nation’s leading social justice advocacy organization winning life-saving change for transgender people. You can also help them out by clicking the “Donate Now” link above.
			</p>
			<p><span>Who wants to get loud with us? Space is limited, so sign up now and let’s come through for the LGBTQ+ community.</span></p>
			<a className="pr-button" href="https://actionnetwork.org/ticketed_events/the-pride-ride" target="_blank">grab a seat</a>
			<h1>When &amp; where</h1>
			<div className="row">
				<div className="col-sm-6">
					<h2>Pick up</h2>
					<p><span>Sunday, June 11 at 5am</span><br/><em>The LBGT Community Center</em><br/>208 W 13th St, New York, NY 10011</p>
					<h2>Drop off</h2>
					<p><span>Sunday, June 11 at 10am</span><br/><em>Washington, D.C. Mall</em></p>
					<h2>Return to New York</h2>
					<p><span>Sunday, June 11 at 4pm</span><br/><em>Pick up location in D.C. TBD</em></p>
					<p><span>Just so you know: We’re providing the transportation, but in order to ride you must be 18 or older with valid ID and have a reservation in your name. Buses are on a strict schedule, so get to the pick up and drop off points on time or get left behind. Please check out all the info on the sign-up page before you go.</span></p>
				</div>
				<div className="col-sm-6">
					<a href="https://goo.gl/maps/Em5Aepwb4BQ2" target="_blank">
						<img className="pr-map test" src={pride_ride_map}/>
					</a>
				</div>
			</div>
		</div>
	</div>
)

export default PrideRide
