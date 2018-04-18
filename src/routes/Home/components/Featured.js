import React from 'react'
import { Location, IndexLink, Link, browserHistory } from 'react-router'
import { Carousel, CarouselItem } from 'react-bootstrap'
import Swipe from 'react-easy-swipe'
import { getImage, setBackgroundStyle, setSimpleCoverBackgroundStyle, setCoverBackgroundStyle, createMarkup, createMarkupWBR  } from '../../../components/Helpers'
import moment from 'moment'
import { logEvent } from '../../../components/Analytics'
import $ from 'jquery'

const gotoPage = (link) => {
	if (link.type === 'app'){
		window.location.href = link.url
	}else{
		browserHistory.push(link.url)
	}
}

const getDeviceLink = (a) => {
	logEvent({
		category: 'Hero Banners',
		action: 'Click',
		label: a.title
	})
	if(!isFeaturedProduct(a.custom_fields)){
		return {url: '/into/'+a.slug, type: 'insite'}
	}else{
		if ( navigator.userAgent.match(/Android/i )) {
			return {url: a.custom_fields.featured_android_link[0], type: 'app'};
		}else{
			return {url: a.custom_fields.featured_ios_appstore_link[0], type: 'app'};
		}
	}
}

const isFeaturedProduct = (a) => {
	if (a.hasOwnProperty('featured_product_banner')) {
		if (a.featured_product_banner[0]==='1') {
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

const Featured = React.createClass({

	getInitialState() {
		
		return {
			index: 0,
			direction: null,
			timer: setInterval(this.checkForActiveCarouselItem, 500),
			curentSlide: null
		}
	},

	checkForActiveCarouselItem () {

	    if ($('.item').hasClass('active')) {
	    	let slideTitle = $('.item.active h2').text()
	    	if(this.state.curentSlide!==slideTitle && slideTitle!==''){
	    		this.setState({
	    			curentSlide: slideTitle
	    		})
	    		logEvent({
	    			category: 'Hero Banners',
	    			action: 'Impression',
	    			label: slideTitle
	    		})
	       	}
	    }else{
	    	console.log('event timer')
	    }
	},

	shouldComponentUpdate () {
		return true
	},

	componentDidMount() {
		
	},

	componentWillUnmount(){
		clearInterval(this.state.timer)
	},

	navControl(dir){
		this.setState({
		  index: dir==='next' ? this.state.index+1 : this.state.index-1,
		  direction: dir
		})
	},

	handleSelect(selectedIndex, e) {
	    console.log('selected=' + selectedIndex + ', direction=' + e.direction);
	    this.setState({
	      index: selectedIndex,
	      direction: e.direction
	    })
	},

	render () {
		return (
			<Swipe
				onSwipeLeft={ () => this.navControl('next') }
				onSwipeRight={ () => this.navControl('prev') }>	
				<Carousel data-interval={4000} id="Carousel" direction={this.state.direction} onChange={()=>console.log('I SLIDEDED')}>
					{this.props.featured.map((a, index) => (
						<Carousel.Item key={'csl_'+index} style={setCoverBackgroundStyle(a, a.custom_fields.main_image[0])} onClick={() => gotoPage(getDeviceLink(a))}>
							<div className={'text-uppercase carousel_text_wrapper'}>
								{!isFeaturedProduct(a.custom_fields) &&
									<div to className={'contentbox right'}>
										<h3>{moment(a.date).format('dddd, MMMM D')}</h3>
										<h2 dangerouslySetInnerHTML={createMarkupWBR(a.custom_fields.featured_header_title[0])} />
										<p dangerouslySetInnerHTML={createMarkupWBR(a.custom_fields.kicker_text[0])} />
									</div>
								}
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</Swipe>
		)
	}
})

export default Featured