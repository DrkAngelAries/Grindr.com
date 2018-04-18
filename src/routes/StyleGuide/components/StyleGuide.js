import React from 'react'
import { IndexLink, Link } from 'react-router'
import './StyleGuide.scss'
import { createMarkup } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import Phone from '../assets/iphone.png'
import google_play from '../assets/google_play.png'
import app_store from '../assets/app_store.png'
import office_image from '../assets/office_image.jpg'

export const StyleGuide = ({item}) => (
	<div className="container styleguide page">
	<div className={'hero'}>
	  <img src={office_image}></img>
	</div>
	<div className="page-content">
	  <h1>PRESS ASSETS</h1>
		<p>Grindr is the largest all-male social network in the world, with over 2.5 million daily active users in 234 countries and territories. That means your business gets connected: <a>Im a link</a></p>
		<p><strong>BE </strong><b>SEEN</b><br/>Our users are highly engaged and love to hang with us, spending an average of 54 minutes within the app daily.</p>
		<h2>Advertise with Grindr</h2>
		<p>Grindr is the largest all-male social network in the world, with over 2.5 million daily active users in 234 countries and territories. That means your business gets connected:</p>
		<p><strong>BE </strong><b>SEEN</b><br/>Our users are highly engaged and love to hang with us, spending an average of 54 minutes within the app daily.</p>
		<a>Im a link</a>
		<h3>this is an h3</h3>
		<h4>this is an h4</h4>
		<h5>this is an h5</h5>
		<h6>this is an h6</h6>
	</div>


	</div>




)

StyleGuide.propTypes = {
	item: React.PropTypes.object
}

export default StyleGuide