import React from 'react'
import { IndexLink, Link } from 'react-router'
import './SafetyEnglish.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'

export const SafetyEnglish = () => (
	<div className={'container page safety_english'}>
		<div className="page-content">
			<h1>Safety English</h1>
			<p><strong><u>SAFETY</u></strong></p>
			<p><strong>If you live someplace where being LGBTQ puts you in danger, here are some important steps you can take to ensure your safety while using Grindr.</strong></p>
			<ol>
				<li><strong><u>Don’t post a picture of your face</u></strong>. Try using a picture that represents you in a different way like one related to your hobbies or personality.</li>
				<li><strong><u>Only meet friends of friends</u></strong>. Before you meet someone, you may want to verify that they are LGBTQ people with another trusted friend or friend-of-a-friend.</li>
				<li><strong><u>Meet by Skype or in a safe location first</u></strong>. Sharing your home address can be risky. Instead, get to know someone better by meeting them at an LGBT-friendly café or have a talk on Skype.</li>
				<li><strong><u>Let a friend know where you’re meeting just in case</u></strong>. It’s always a good idea to have people who know where you’ve gone and any emergency contact information you can provide.</li>
				<li><strong><u>If you get arrested, never ever confess or admit to anything.</u></strong> Even if they have proof, staying silent is your best bet.</li>
				<li><strong><u>When first meeting someone, take as little with you as you can</u></strong>. Don't take your credit and ATM cards only identification documents you plan to use.</li>
				<li><strong><u>Get tested regularly for HIV and other STIs</u></strong>. Do it at least three times per year, and always have conversations with the guys you meet about your safety expectations.</li>
				<li><strong><u>If something does go wrong, go to a human rights or LGBTQ organization for help. </u></strong>Find out about places in your area that provides direct legal services like an LGBTQ organization or a more general human rights organization.</li>
			</ol>
		</div>
	</div>
)

export default SafetyEnglish
