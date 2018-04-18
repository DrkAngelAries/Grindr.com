import React from 'react'
import { IndexLink, Link } from 'react-router'
import './GrindTheVote.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import DocumentMeta from 'react-document-meta'
import _ from '../../../components/Helpers/underscore'
import gtvLogo from '../assets/gtv-logo.svg'


export const GrindTheVote = () => (
	
	<div className="grind-the-vote-block container-fluid page">
		<div className="top-banner">
			<div className="tb-left"> 
				<img src={gtvLogo} alt="Register to Vote" /> 
			</div>
			<div className="tb-right">
				<div className="tb-heading">Turn up. Turn out.
				</div>
				<div className="tb-content">The political stakes are higher than ever<br/>for the LGBTQ community, but you can’t<br/>vote if you’re not registered. Sign up now<br/>(or just update your info) to make sure<br/>your voice is heard. <span>Register using the form below.</span></div>
			</div>
		</div>
		<iframe src="https://register.rockthevote.com/?partner=35404&source=iframe" width="100%" height="1200" marginHeight="0" frameBorder="0"></iframe>
	</div>
)

export default GrindTheVote
