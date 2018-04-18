import React from 'react'
import { getImage, setBackgroundStyle, setCoverBackgroundStyle, createMarkup, createMarkupWBR, getContributors, isMobile, getArticleTags } from '../../../../../components/Helpers'
import $ from 'jquery'
import TweenLite from 'gsap'
import ShareBar from '../../../../../components/ShareBar'

const LongForm = React.createClass({
	getInitialState() {
		return {
			article: this.props.article,
			main_image: getImage(this.props.article, this.props.article.custom_fields.main_image[0]),
			title: createMarkup(this.props.article.title),
			excerpt: createMarkup(this.props.article.custom_fields.excerpt[0]),
			contributors: createMarkup(this.props.article.custom_fields.contributors[0]),
			long_form: createMarkup(this.props.article.custom_fields.long_form[0]),
			tags: getArticleTags(this.props.article.tags)
		}
	},
	addClass(img){
	 	let w = img.width()
		let h = img.height()
		let naturalWidth = img.get(0).naturalWidth
		if(w > h && naturalWidth > 1000){
			img.addClass('landscape');
		} else if (naturalWidth > 1000) {
			img.addClass('portrait');
		}
	},
	checkImages(){
		const _this = this
		let imgs = $('#long_form img')
		imgs.each(function(){
			let img = $(this)
			img.on('load', function(){
				let src  = img.attr('src')
				let ext = src.substr(src.lastIndexOf('.')+1)
				switch (ext) {
					case 'gif':
						break;
					case 'jpg':
						_this.addClass(img)
						break;
					case 'png':
						_this.addClass(img)
						break;
					default:
						break;
				}
			})
		})
	},
	killEmptyP(){
		let p = $('#long_form p')
		p.each(function(){
		    var $this = $(this);
		    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
		        $this.remove();
		})
	},
	componentDidMount() {
		this.checkImages()
		this.killEmptyP()
	},
	render() {
		return (
			<div>	
				<div className={'contentarea'}>
					<div className={'hero'}>
						<img src={this.state.main_image}/>
					</div>
					<h2 dangerouslySetInnerHTML={this.state.title}/>
					<h3 className="" dangerouslySetInnerHTML={this.state.excerpt}/>
					<div className="author" dangerouslySetInnerHTML={this.state.contributors}/> 
					<div id="top-bar">
						<ShareBar id="fade-bar" props={this.props.article}/>
					</div>
					<hr/>

					<div id="long_form" className="long_form content" dangerouslySetInnerHTML={this.state.long_form}/>
					<div id="bottom-box">
						<hr className="short-rule"/>
						<ShareBar props={this.props.article}/>
						<p className="tags_wrapper">Tags: {this.state.tags}</p>
					</div>
				</div>
			</div>
		)
	}
});

export default LongForm