import React from 'react'
import { IndexLink, Link } from 'react-router'
import './PrideRideRelease.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import DocumentMeta from 'react-document-meta'
import _ from '../../../components/Helpers/underscore'

const putMetaData = () => {
	const meta = {
		title: "Grindr |  The world's largest gay social network app",
		description: "Your window into the modern LGBTQ world, Into is a digital magazine that celebrates and examines the people, places, and issues that keeps our community connected.",
		canonical: "https://www.grindr.com/",
		meta: {
			charSet: "utf-8",
			name: {
				keywords: "Grindr |  The world's largest gay social network app"
			},
			itemProp: {
				name: "Grindr |  The world's largest gay social network app",
				description: "Your window into the modern LGBTQ world, Into is a digital magazine that celebrates and examines the people, places, and issues that keeps our community connected.",
				canonical: "https://www.grindr.com/",
			},
			property: {
				"og:title": "Grindr |  The world's largest gay social network app",
				"og:type": "article",
				"og:site_name": "Gay Dating App & Social Network – Chat & Date on Grindr",
				"og:url": "https://www.grindr.com/",
				//"og:image": pride_ride,
				"twitter:site": "@Grindr",
				//"twitter:image": pride_ride,
				"twitter:title": "Grindr |  The world's largest gay social network app",
				"twitter:card": "summary",
				"twitter:description": "Your window into the modern LGBTQ world, Into is a digital magazine that celebrates and examines the people, places, and issues that keeps our community connected.",
			}
		},
		auto: {
			ograph: true
		}
	}
	return <DocumentMeta {...meta} />
}

export const PrideRideRelease = () => (
	<div className={'container page pride-ride-release'}>
		<div className="page-content">
			{putMetaData()}
			<h1>Pride Ride Participation Agreement, Release, and Indemnity</h1>
			<p>READ CAREFULLY BEFORE&nbsp;AGREEING</p>
			<p>In consideration of my participation in the Pride Ride on June 11, 2017 from New York, NY to Washington, D.C. and back (the &ldquo;<strong>Event</strong>&rdquo;), as well as other activities related to the foregoing (collectively, the &ldquo;<strong>Activities</strong>&rdquo;), I hereby agree as follows:</p>
			<p>Only the first 214&nbsp;participants who submit a valid registration application and make a $5.00 dollar payment will receive a spot for the Event. Signing up for the Event does guarantee a spot. All applications remain subject to confirmation and approval by Grindr LLC (&ldquo;<strong>Grindr</strong>&rdquo;).</p>
			<p><strong>Event Details</strong>. On the day of the event, June 11, 2017, busses will pick up registered participants at 5:00 am ET from the LGBT Center at 208 W 13th St, New York, NY 10011. Each rider must show a valid ID before entering the bus in order to ensure they are at least 18 years of age each rider is a registered participant and has agreed to this Participation Agreement, Release and Indemnity. The riders will be driven to Washington, D.C. and be dropped off at a location to-be-determined near the Equality March. Grindr understands that the march begins at 10am, with a rally at 12pm and concert at 1pm. Riders must return to the bus corral location at 3pm. The busses will depart for New York at 4pm. We anticipate that the busses will return to the New York LGBT center at approximately 8:30 pm. All details subject to change.</p>
			<p><strong>Terms and Conditions of Event</strong>. While participating in the Activities, I agree to obey all rules, regulations, policies, and instructions of Grindr and any transportation company involved in the Event, and all applicable laws. Without limiting the foregoing, I expressly acknowledge and agree to the following:</p>
			<ul>
				<li>I agree that my participation in the Event is conditioned upon my being available as, when and where required by Grindr. If I am not available as, when or where required, I may be left behind and will be solely responsible for transportation costs and other expenses incurred by me. Times and locations may be subject to change in Grindr&rsquo;s discretion.</li>
				<li>Grindr will not be responsible for any cancellations, delays, diversions, postponement or any act or omissions whatsoever by Grindr or any transportation companies or any other party providing any services in connection with any Activities, whether for weather, an act of God, civil disturbance or any other reason.</li>
				<li>Tickets cannot be returned, refunded or exchanged for cash value or substitute passes and/or tickets.</li>
				<li>No drugs or alcohol will be permitted on the bus, and I expressly agree not to bring or consume same.</li>
				<li>No food or beverages will be provided, and I will be solely responsible for providing my own food and beverages (which may be brought on the bus).</li>
				<li>The Released Parties (as defined below) will not be responsible for personal items left on the bus during and/or after the Event.</li>
				<li>I understand that Grindr does not screen or conduct any background checks of other Event participants.</li>
				<li>I agree to follow the bus driver&rsquo;s instructions at all times.</li>
				<li>I understand and agree that I, and not Grindr, am responsible for my own well-being.</li>
			</ul>
			<p>I agree that a violation of any of the foregoing or any other rules, regulations, laws or policies of the Event (as determined in the sole discretion of a Grindr representative) may result in immediate termination of my participation in the Event. In addition, the Released Parties (as defined below) reserve the right to remove from the Event or deny attendance to any person who engages in disruptive or inappropriate behavior or with intent to annoy, abuse, threaten or harass any other person at any event.</p>
			<p><strong>Liability Release, Indemnity and Assumption of Risk</strong>. I expressly assume all risks incidental to such participation and, on my own behalf, and on behalf of my and their heirs, executors and administrators, release and forever discharge the Grindr, any transportation company involved in the Event, and their respective officers, directors, employees, representatives, independent contractors, successors and assigns (collectively, the &ldquo;<strong>Released Parties</strong>&rdquo;), of and from all liabilities, claims, actions, damages, costs or expenses of any nature arising out of or in any way connected with my participation in such Activities, and further agree to indemnify and hold each of the Released Parties harmless against any and all such liabilities, claims, actions, damages, costs or expenses, including, but not limited to, all attorney's fees and disbursements. I understand that this release and indemnity agreement includes any claims based on the negligence, action and/or inaction of any of the Released Parties and covers bodily injury (including, without limitation, death) and property damage, whether suffered by me, during and/or after such participation, and whether caused by me, any of the Released Parties, or any third party, as well as any claims associated with use of the Reproduction Rights (including, without limitation, claims arising from rights of publicity, rights of privacy, infliction of emotional distress, defamation, trademark or copyright). Without limiting the foregoing, I expressly acknowledge that the Released Parties do not make any representations or warranties about other participants in the Activities or of any other person whom I may encounter in connection with my participation in any Activities, including but not limited to, the mental or physical health of any such person. I further authorize medical treatment for myself, at my cost, if the need arises.</p>
			<p>I INTEND AND ACKNOWLEDGE THAT THE GENERAL RELEASE SET FORTH ABOVE SPECIFICALLY INCLUDES ANY AND ALL CLAIMS, DEMANDS, OBLIGATIONS AND CAUSES OF ACTION WHETHER NOW KNOWN OR UNKNOWN AND WHETHER OR NOT SPECIFICALLY OR PARTICULARLY DESCRIBED HEREIN, AND I EXPRESSLY WAIVE ALL RIGHTS GIVEN BY SECTION 1542 OF THE CALIFORNIA CIVIL CODE (OR UNDER AN EQUIVALENT PROVISION OF THE LAW OF ANY OTHER JURISDICTION) WHICH STATES:</p>
			<p>&ldquo;A general release does not extend to claims, which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor.&rdquo;</p>
			<p><strong>License to Record and Use</strong>. I grant Grindr the right and exclusive license to make, use and re-use, reproductions, photographs, and recordings of the likeness (audio and visual), voice and sounds of me at the Event, as well as my name and biographical information, as Grindr may desire, in all forms and media, whether now known or hereafter devised, throughout the universe, in perpetuity, without the need to obtain further review, authorization or consent from myself and without compensation to myself or subject to any condition or limitation whatsoever (collectively, the "<strong>Reproduction Rights</strong>"). Grindr shall not have any obligation to exercise or exploit any of the Reproduction Rights, nor shall Grindr have any obligation to accord me any credit in connection with any use of the Reproduction Rights. Each photograph, videotape, recording or other work created by or resulting from the making, use, reuse, exercise or exploitation of the Reproduction Rights shall be a work for hire and Grindr shall be deemed the sole owner of any copyright and/or trademark rights therein (and all applications, registrations and renewals resulting therefrom). If, however, the work is deemed not to be a work made for hire by a court of competent jurisdiction, then this Release and Indemnity shall constitute an irrevocable assignment of the worldwide copyright in the work to Grindr.</p>
			<p><strong>Governing Law and Venue</strong>. This Agreement shall be governed by the laws of the State of New York. Any legal action relating to or arising out of this Agreement against or with respect to any of the Released Parties shall be commenced exclusively in the Supreme Court of the State of New York in and for New York County, without jury (or if such Supreme Court shall not have jurisdiction over the subject matter thereof, then before the United States District Court for the Southern District of New York; or if neither of such courts shall have jurisdiction, then before any other court sitting outside the State of New York in any matter to be submitted to any such court pursuant hereto). The parties expressly waive all rights to trial by jury regarding any such matter.</p>
			<p><strong>Miscellaneous</strong>.<strong> Neither the Agreement nor the Event are sponsored by, affiliated with, or associated in any way with Apple, iTunes, the App Store, Google Play, Stripe, National Center for Trans Equality, or any other entity other than Grindr.</strong></p>
			<p>QUESTIONS REGARDING THIS EVENT CAN BE SENT VIA EMAIL TO <a href="mailto:PRIDERIDE@GRINDR.COM">PRIDERIDE@GRINDR.COM</a> or by regular mail to Grindr LLC, PO Box 69414, West Hollywood, CA 90069</p>
			<p>I hereby certify and represent that I am at least eighteen (18) years old; that I have read the foregoing and fully understand its meaning and effect; and that I intend to be legally bound by its terms.</p>
		</div>
	</div>
)

export default PrideRideRelease
