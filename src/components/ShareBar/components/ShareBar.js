/* @flow */
import React from 'react'
import { IndexLink, Link } from 'react-router'
import { FacebookButton, TwitterButton, TumblrButton } from "react-social"
import ShareArrow from '../assets/Share-arrow.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Tumblr from '../assets/Tumblr.svg'

import './ShareBar.scss'
import $ from 'jquery'

const DOMAIN = window.location.hostname

const showShareBar = (): Function => {
	$('#top-bar > div > .share-buttons').fadeIn(function(){
		setTimeout(function(){ hideShareBar(); }, 5000);
	})
}

const hideShareBar = (): Function => {
	$('#top-bar > div > .share-buttons').fadeOut()
}


export const ShareBar = ({props}) => (
	<div className="share-bar">
		<div id="soc-button" className="soc-label" onClick={showShareBar}><span>SHARE</span><img className="share-arrow" src={ShareArrow}/> </div>
		<div className="share-buttons">
			<FacebookButton title="Share via Facebook" message={props.excerpt} appId={1273378622718674} url={'https://'+DOMAIN+'/into/'+props.slug+'/'} element="a" className={'fb_social'}>
				<img className="social-button" src={Facebook}/>
			</FacebookButton>
			<TwitterButton title="Share via Twitter" message={props.excerpt} url={'https://'+DOMAIN+'/into/'+props.slug+'/'} element="a" className={'tw_social'}>
				<img className="social-button" src={Twitter}/>
			</TwitterButton>
			<TumblrButton title="Share via Tumblr" message={props.excerpt} url={'https://'+DOMAIN+'/into/'+props.slug+'/'} element="a" className={'tb_social'}>
				<img className="social-button" src={Tumblr}/>
			</TumblrButton>
		</div>	
		<div className="layer"></div>
		
	</div>
)

export default ShareBar
