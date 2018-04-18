import React from 'react'
import { getImage, setBackgroundStyle, setCoverBackgroundStyle, createMarkup, createMarkupWBR, getContributors, isMobile } from '../../../../../components/Helpers'
import $ from 'jquery'
import { browserHistory, Link } from 'react-router';
import './SlideShow.scss'
import ArrowRight from './assets/Arrow-right.svg'
import ArrowLeft from './assets/Arrow-left.svg'
import Plus from './assets/Addition.svg'
import Minus from './assets/Minus.svg'
import TweenLite from 'gsap'
import ShareBar from '../../../../../components/ShareBar'
import Swipe from 'react-easy-swipe'
import { logSliderEvent} from '../../../../../components/Analytics'

const getSlides = (item, cf): Function => {
	let l = +cf.slide_show[0]
	let arr = [];
	for(let i=0;i<l;i++){
	 let temp = {
			'img': cf['slide_show_'+i+'_image'][0],
			'description': cf['slide_show_'+i+'_description'][0],
			'origin': item,
		}
		arr.push(temp)
	}
	return arr
};

const SlideShow = React.createClass({

	getInitialState() {
		return {
			index: 0,
			slides: this.props.slides,
			direction: null,
			total: +this.props.slides.custom_fields.slide_show[0],
			_currentSlide: null,
			nextSlide: null,
			slideShowDispay: '',
			ThumbDisplay: '',
			titleSlide: '',
			titleBottom: '',
			speed: .3,
			title: this.props.slides.title,
			title_card: getImage(this.props.slides, this.props.slides.custom_fields.slide_show_0_image[0]),
			contributors: createMarkup(this.props.slides.custom_fields.contributors[0]),
			excerpt: this.props.slides.custom_fields.excerpt[0],
			thumbs: getSlides(this.props.slides, this.props.slides.custom_fields),
			squares: null
		};
	},

	componentDidMount() {
		$('.footer').hide();
		$('#download-button').fadeOut();
		document.onkeydown = this.checkKey;
	},
  
	componentWillUnmount() {
		//document.onkeydown = null;
	},

	closeSlideShow(){
		//document.onkeydown = null;
		browserHistory.push('/');
	},

	getThumbnailView(){
		this.setState({
			slideShowDispay: ' fadeOut fadeOut-animated',
			thumbDisplay: ' fadeIn fadeIn-animated',
			backtoslides: ' fadeIn fadeIn-animated',
			squares: ' fadeOut fadeOut-animated',
		})
	},

	hideThumbnailView(){
		this.setState({
			slideShowDispay: ' fadeIn fadeIn-animated',
			thumbDisplay: ' fadeOut fadeOut-animated',
			backtoslades: ' fadeOut fadeOut-animated',
			squares: ' fadeIn fadeIn-animated',
		})
	},

	prev(){
		var count = this.state.index
		count = ( count > 0 ) ? (count-1) : this.state.total 
		this.setState({index: count});
		this.moveSlides(this.state._currentSlide, $('#slide_'+count), '150%', '-150%', count)
	},

	next(){
		var count = this.state.index
		count = ( count === this.state.total ) ? count=0 : (count+1)
		var elem = $('#slide_'+count)
		this.setState({
			index: count,
			nextSlide: elem
		})
       	this.moveSlides(this.state._currentSlide, elem, '-150%', '150%', count)
	},

	prevSlide(e){
		e.preventDefault()
		this.prev()
	},

	nextSlide(e){
		e.preventDefault()
		this.next()
	},

	displayArrows(){
		if(!isMobile){
			return (
				<div>
					<div className="closeX_wrapper">
						<img className="closeX" src={'/img/icons/CloseX.svg'} onClick={this.closeSlideShow}/>
					</div>
					<div className="arrows_wrapper">
						<div className="left-arrow" direction="prev" onClick={this.prevSlide}>
							<img src={ArrowLeft}/>
						</div>
						<div className="right-arrow" direction="next" onClick={this.nextSlide}>
							<img src={ArrowRight}/>
						</div>
					</div>
				</div>
			)
		}
	},

	moveSlides(current, next, to, from, count){
		this.setState({
			titleBottom: (count===0) ? 'fadeOut fadeOut-animated' : 'fadeIn fadeIn-animated',
			titleSlide:(count===0) ? 'fadeIn fadeIn-animated' :'fadeOut fadeOut-animated'
		})

		current = (current===null) ? $('.title-card') : current

		let speed = this.state.speed
		// Moves the current image off the frame
		let anim1 = TweenLite.to(current, speed, {
			left: to,
			ease: Power1.easeInOut,
			onComplete:this.nextAnim, 
			onCompleteParams:[next, from, current],  
		})

		//console.log(this.state.total, this.state.index)

		logSliderEvent({
			category: 'Slide Show',
			action: 'Slide Viewed',
			label: this.state.title,
			total: this.state.total,
			viewed: this.state.index
		})
	},

	nextAnim(next, from, current){
		if (this.state.index===0) {
			$('.title-card').css('display', 'block')
		}else{
			current.css('display', 'none')
		}

		next.css('display', 'block')
		next.css('left',from)
		// Moves the new image into the frame
		let anim2 = TweenLite.to(next, this.state.speed, {
			left: '50%',
			ease: Power1.easeInOut,
		})
		this.setState({_currentSlide: next });
	},

	gotoSlide(e){
		$('.slide').css('left','-150%')
		var count = +e.currentTarget.id+1
		var elem = $('#slide_'+count)
		this.setState({
			slideShowDispay: ' fadeIn fadeIn-animated',
			thumbDisplay: ' fadeOut fadeOut-animated',
			index: count,
			nextSlide: elem,
			_currentSlide: $('#slide_'+(count = ( count > 0 ) ? (count-1) : this.state.total))
		})
       	this.moveSlides($('#slide_'+(count = ( count > 0 ) ? (count-1) : this.state.total)), elem, '-150%', '150%', ((count===0) ? count=1 : count))
	},

	render() {
		return (
			<div className="slide-show">
				<div className={'slideshow-container '+this.state.slideShowDispay}>
					<Swipe
						onSwipeLeft={this.next}
						onSwipeRight={this.prev}>
						<div className="desktop-slides">	
							
							{this.displayArrows()}

							<div className={'title-card '+this.state.titleSlide}>
									<img className="slide" id={'slide_0'} alt="" src={this.state.title_card}/>
								<div className="card">
									<h2>{this.props.slides.title}</h2>
									<p>{this.state.excerpt}</p>
									<div className="author" dangerouslySetInnerHTML={this.state.contributors}/> 
								</div>
							</div>
							{getSlides(this.props.slides, this.props.slides.custom_fields).map(function(a, index){
								return (
									<img className="slide" key={'slideshow_'+(index+1)} alt={a.description} id={'slide_'+(index+1)} alt="" src={getImage(a.origin, a.img)}/>
								)
							})}
						</div>
					</Swipe>
				</div>
				<div className={'slide-thumbs '+this.state.thumbDisplay}>
					{this.state.thumbs.map(function(a, index){
						return <div id={index} className="s-thumb" key={index} style={setCoverBackgroundStyle(a.origin, a.img)} onClick={this.gotoSlide}/>
					}, this)}
					<div className="thumbnail-icon">
						<h3 className={'backtoslides '+this.state.thumbDisplay} onClick={this.hideThumbnailView}><span className="rotatearrow">{'<'}</span> <span>Back to slideshow</span></h3>
					</div>
				</div>
				<div className="bottom-box">
					<ShareBar props={this.props.slides}/>
					<div className="thumbnail-icon">
						<img className={this.state.squares} src={'/img/icons/Thumbnail-Icon.svg'} onClick={this.getThumbnailView}/>
						<span>{ this.state.index+1 } / {this.state.total+1}</span>
					</div>
					<h2 className={'bottom-title '+this.state.titleBottom}>{this.state.title}</h2>
				</div>
			</div>
		)
	}
});

export default SlideShow