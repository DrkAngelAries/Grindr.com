import React from 'react'
import { IndexLink, Link } from 'react-router'
// import Social from '../assets/socials.svg'
import './Footer.scss'
import $ from 'jquery'

const iTunes = 'https://app.appsflyer.com/id319881193?pid=grindr_download_ios_footer_link'
const Android = 'https://app.appsflyer.com/com.grindrapp.android?pid=grindr_download_android_footer_link'


const Footer = React.createClass({
	getMobileOS: function () {
		let userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			console.log('ios')
			return iTunes;
		} else {
			console.log('and')
			return Android;
		}
	},
	openLink: function () {
		window.open(this.getMobileOS(), '_blank')
	},
	render: function () {
		var pathArray = window.location.pathname.split( '/' );
		var secondLevelLocation = pathArray[1];
		//console.log('++++++++++ FOOTER PATHNAME', secondLevelLocation)

		if (secondLevelLocation!=='into'){
			$('nav, .footer').show();
		}

		return (
			<div className={'footer'}>
			<hr/>
				<div className="col-xs-12 col-sm-6 kill-padding">


					<div className="left_side">
						<div className={'downloadlink'} onClick={this.openLink}>download grindr</div>

						<div className={'socials'}>
							<div className={'social_box'}>
								<a className={'fb_social'} href="https://www.facebook.com/Grindr" target="_blank"><img className="icons" src="/img/icons/Facebook.svg"/></a>
							</div>
							<div className={'social_box'}>
								<a className={'instagram_social'} href="https://www.instagram.com/grindr/" target="_blank"><img className="icons" src="/img/icons/Instagram.svg"/></a>
							</div>
							<div className={'social_box'}>
								<a className={'twitter_social'} href="https://twitter.com/Grindr" target="_blank"><img className="icons" src="/img/icons/Twitter.svg"/></a>
							</div>
							<div className={'social_box'}>
								<a className={'snapchat_social'} href="http://grindr.me/snapchat" target="_blank"><img className="icons" src="/img/icons/Snapchat.svg"/></a>
							</div>
							<div className={'social_box'}>
								<a className={'youtube_social'} href="http://grindr.me/youtube" target="_blank"><img className="icons" src="/img/icons/Youtube.svg"/></a>
							</div>
						</div>
					</div>

				</div>

				<div className="col-xs-12 col-sm-6 kill-padding">

					<div className={'footer_nav'}>

						<div className="col-xs-6 kill-padding">
							<Link className="footer_links" to="/gay-advertising" activeClassName={'activeRoute'}>Advertise</Link>
							<Link className="footer_links" to="/community" activeClassName={'activeRoute'}>Community</Link>
							<Link className="footer_links" to="/contact" activeClassName={'activeRoute'}>Contact</Link>
							<Link className="footer_links" to="/about" activeClassName={'activeRoute'}>About</Link>
						</div>

						<div className="col-xs-6 kill-padding">
							<Link className="footer_links" to="/careers" activeClassName={'activeRoute'}>Careers</Link>
							<Link className="footer_links" to="/profile-guidelines" activeClassName={'activeRoute'}>Guidelines</Link>
							<Link className="footer_links" to="/privacy-policy" activeClassName={'activeRoute'}>Privacy Policy</Link>
							<Link className="footer_links" to="/terms-of-service" activeClassName={'activeRoute'}>Terms of Service</Link>
						</div>

						<div className="footer_copyright">
							&copy; 2018 Grindr LLC
						</div>
					</div>
				</div>
			</div>

		)
	}
})

export default Footer
