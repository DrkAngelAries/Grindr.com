import React from 'react'
import { Location, IndexLink, Link, browserHistory } from 'react-router'
import NeroHome from '../assets/nero-home.svg'
import './Header.scss'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, nav } from 'react-bootstrap';
import $ from 'jquery'

const IntoLogo = '/img/_into_logo_blk.png'
let initialRoute = window.location.pathname.split( '/' )
var Header = React.createClass({
	getInitialState() {
		return {
			navDisplay: '',
			dropCount: 0,
			logo: NeroHome,
			grindrLogo: 'fadeInDown animated-fadeInDown',
		}
	},

	componentDidMount(){
		var bodyEl = $('body'),
			navToggle = $('.navbar-toggle');
		
		navToggle.click(function(e) {
			e.stopPropagation();
			if (bodyEl.hasClass('nav-active')) {
				bodyEl.removeClass('nav-active');
			} else {
				bodyEl.addClass('nav-active');
			}
		});
		bodyEl.click(function() {
			if (bodyEl.hasClass('nav-active')) {
				bodyEl.removeClass('nav-active');
			}
		});
		
		$(window).resize(function(){
			bodyEl.removeClass('nav-active');
		})

		$(window).on("scroll", function() {
			if($(window).scrollTop() > 50) {
				$(".main-nav").addClass("active");
			} else {
				//remove the background property so it comes transparent again (defined in your css)
			   $(".main-nav").removeClass("active");
			}
		})
		browserHistory.listen( location =>  {
			let p = window.location.pathname.split( '/' )
			this.setState({
				grindrLogo : (p[1]==='into' || p[1]==='') ? 'fadeOutUp animated-fadeOutUp' : 'fadeInDown animated-fadeInDown',
				intoLogo : (p[1]==='into' || p[1]==='') ? 'fadeInDown animated-fadeInDown' : 'fadeOutUp animated-fadeOutUp'
			})
		})
	},

	shouldComponentUpdate () {
		return true
	},

	navControl: function(){
		if (!this.state.navDisplay) {
			$('*').off('click', function(){
				this.setState({navDisplay: ''})
			})
		}else{
			$('*').on('click', function(){
				this.setState({navDisplay: 'nav-active'})
			})
		}
	},


	render: function () {
		
		return (
			<nav id="header" className="main-nav clearfix">
				<button type="button" className="navbar-toggle btn" data-toggle="offcanvas">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>

				<div className="logo-container">
					<Link to="/">
						<img className={ 'nero-home '+ this.state.grindrLogo } src={ NeroHome }/>
					</Link>
				</div>

				<div className="nav-items-wrapper">
					<Link className="download-link visible-xs visible-sm" activeClassName={'nav_links_active'} to="/download-grindr">Download the app</Link>
					<ul className="nav-items">
						<li><a className="nav_links" href="https://intomore.com/" target="_blank">Into</a></li>
						<li><Link className="nav_links" to="/community" activeClassName={'nav_links_active'}>Community</Link></li>
					</ul>
					<ul className="nav-items">
						<li className="has-children">
							<Link className="nav_links" to="/about" activeClassName={'nav_links_active'}>About</Link>
							<ul className="sub-items">
								<li><Link className="nav_links" to="/press" activeClassName={'nav_links_active'}>Press &amp; news</Link></li>
								<li><Link className="nav_links" to="/careers" activeClassName={'nav_links_active'}>Careers</Link></li>
								<li><a className="nav_links" href="https://grindr.tumblr.com/" target="_blank">Blog</a></li>
								<li><Link className="nav_links" to="/contact" activeClassName={'nav_links_active'}>Contact us</Link></li>
								<li><a className="nav_links" href="https://help.grindr.com/" target="_blank">App support</a></li>
							</ul>
						</li>
						<li><Link className="nav_links" to="/gay-advertising" activeClassName={'nav_links_active'}>Advertise</Link></li>
					</ul>
				</div>
			</nav>
		)
		
	}
})

export default Header