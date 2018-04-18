import React from 'react'
import { IndexLink, Link, isActive } from 'react-router'
import './DownloadApp.scss'
import GetApp from '../assets/Chatdownload.svg'
import $ from 'jquery'

const RecieveSound = '/sounds/receive_chat.mp3'
const SendSound = '/sounds/send_chat.mp3'
const FavSound = '/sounds/favorite.mp3'

const iTunes = 'https://app.appsflyer.com/id319881193?pid=grindr_download_ios_chat_button'
const Android = 'https://app.appsflyer.com/com.grindrapp.android?pid=grindr_download_android_chat_button'

var DownloadApp = React.createClass({
	getInitialState(){
		return {
			className: 'get_app_link',
			bubble1: 'hidden',
			bubble2: 'hidden',
			bubble3: 'hidden',
			bubble4: 'hidden',
			gaymoji: '',
			bubbleDance: 'animated tada',
			showButton: 'show-button',
			dance : null
		};
	},
	startDLShow(){
		window.open(this.getMobileOS(), '_blank')
//		$('.carousel-indicators').hide()
//		$('#the-button').hide()
//		if (this.state.className === 'growMe'){
//			this.setState({
//				className: 'get_app_link',
//				bubble1: 'hidden',
//				bubble2: 'hidden',
//				bubble3: 'hidden',
//				bubble4: 'hidden',
//				gaymoji: 'gaymoji_set'
//			});
//		} else {
//			this.setState({className: 'growMe'});
//			var i = 0;
//			var times = setInterval(function() {
//				if (i===4) clearInterval(times)
//				this.displayDLmsg(i++)
//			}.bind(this), 1000, 3);
//		}
	},
	getMobileOS() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			return iTunes;
		} else {
			return Android;
		}
	},
	displayDLmsg(i){
		switch(i) {
			case 0:
				this.setState({bubble1: 'showMe'});
				this.playSound(RecieveSound);
				break;
			case 1:
				this.setState({bubble2: 'showMe'});
				this.playSound(SendSound);
				break;
			case 2:
				this.setState({bubble3: 'showMe'});
				this.playSound(SendSound);
				break;
			case 3:
				this.setState({bubble4: 'showMe'});
				this.setState({gaymoji: 'animated tada'});

				this.playSound(FavSound);
				break;
			case 4:
				window.open(this.getMobileOS(), '_blank')
				break;
		}
	},
	playSound(url) {
			const a = new Audio(url);
			a.play();
	},
	bubbleDance(i) {
		if(this.isOdd(i)) {
			this.setState({bubbleDance: 'animated tada'});
		}else{
			this.setState({bubbleDance: ''});
		}
	},
	isOdd(num) {
		return num % 2;
	},
	componentDidMount(){
		var i = 0;
		this.setState({
			dance: setInterval(function() {
				if (i===20) clearInterval(this.state.dance)
					this.bubbleDance(i++)
				}.bind(this), 5000)
		})

	},
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	},
	componentWillUnmount(){
		clearInterval(this.state.dance)
	},
	render(){
		const showhide = (window.location.pathname!=='/') ? 'fadeOut fadeOut-animated' : 'fadeIn fadeIn-animated'
		return (
			<div id="download-button" className={showhide}>
				<div className={this.state.className} onClick={this.startDLShow}>
					<img id="the-button" className={'test', this.state.bubbleDance} src={GetApp}/>
					<div className={'download_msg'}>
						<div className="bottom-bar">
							<div className="saysumfin">Say something…</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default DownloadApp
