import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyKenya.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyKenya = () => (
	<div className={'container page safety_kenya'}>
		<div className="page-content">
			<h1>Safety Kenya</h1>
			<p><strong><u>SAFETY</u></strong></p>
			<p><strong>Karibu! Enjoy Grindr in Kenya. In case of any security concerns, call NGLHRC, National Gay and Lesbian Human Rights Commission, based in Kenya, for free legal representation at +254 (020) 4400525. You can also visit <a href="https://www.nglhrc.com/" target="_blank">the NGLHRC website</a> for more tips on staying safe when socializing and other emergency contacts.</strong></p>
			<ol>
				<li><strong><u>Don’t post a picture of your face</u></strong>. You may want to try using a picture that represents you in a different way like one related to your hobbies or personality.</li>
				<li><strong><u>Only meet friends of friends</u></strong>. Before you meet someone, you may want to verify that they are LGBTQ people with another trusted friend or friend-of-a-friend.</li>
				<li><strong><u>Meet by Skype or in a safe location first</u></strong>. Sharing your home address can be risky. Instead, get to know someone better by meeting them at an LGBT-friendly café or have a talk on Skype.</li>
				<li><strong><u>Let a friend know where you’re meeting just in case</u></strong>. It’s always a good idea to have people who know where you’ve gone and any emergency contact information you can provide.</li>
				<li><strong><u>If you get arrested, never ever confess or admit to anything.</u></strong> Call NGLHRC at +254 (020) 4400525 for free legal representation.</li>
				<li><strong><u>When first meeting someone, take as little with you as you can</u></strong>. Don't take your credit and ATM cards only identification documents you plan to use.</li>
				<li><strong><u>Get tested regularly for HIV and other STIs</u></strong>. Do it at least three times per year, and always have conversations with the guys you meet about your safety expectations.</li>
				<li><strong><u>If something does go wrong, call NGLHRC and talk to a lawyer about how to preserve evidence and report a crime.</u></strong> You can reach NGLHRC at +254 (020) 4400525 or by email at <a href="mailto:info@nglhrc.com">info@nglhrc.com</a>. You can also visit <a href="https://www.nglhrc.com/" target="_blank">www.nglhrc.com</a>.
				</li>
			</ol>
		</div>
	</div>
)

export default SafetyKenya
