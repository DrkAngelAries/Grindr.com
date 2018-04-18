import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DownloadApp from '../../components/DownloadApp'
//import SmartBanner from 'react-smartbanner'
import './CoreLayout.scss'
import '../../styles/core.scss'
import Phone from './assets/phone.svg'
import PhoneOutline from './assets/phone_outline.svg'
import Arrow from './assets/arrow.svg'

export const CoreLayout = ({ children }) => (
	<div>
		{/*<SmartBanner title={'Grindr'} button={'View'} daysHidden={7} daysReminder={30} />*/}
		<div className="landscape_overlay_wrapper">
			<div className="landscape_overlay">
				<img className="arrow_overlay" src={Arrow}/>
				<img className="phone_overlay" src={Phone}/>
				<img className="phone_outline_overlay" src={PhoneOutline}/>
				<div className="landscape_overlay_text">Please rotate your device.</div>
			</div>
		</div>
		<div id="react-body">
			{!window.location.pathname.includes('grindrlabs') ? <Header /> : null }
			<div className='core-layout__viewport'>
				{children}
			</div>
			{!window.location.pathname.includes('grindrlabs') ? <Footer/> : null }
		</div>
		{!window.location.pathname.includes('grindrlabs') ? <DownloadApp/> : null }
	</div>
)

CoreLayout.propTypes = {
	children : React.PropTypes.element.isRequired
}

export default CoreLayout