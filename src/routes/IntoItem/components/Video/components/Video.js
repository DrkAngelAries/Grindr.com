import React from 'react'
import { getImage, setBackgroundStyle, setCoverBackgroundStyle, createMarkup, createMarkupWBR, getContributors, isMobile, getArticleTags } from '../../../../../components/Helpers'
import $ from 'jquery'
import TweenLite from 'gsap'
import ShareBar from '../../../../../components/ShareBar'



const getVimeoUrl = (id) => {
	return 'https://player.vimeo.com/video/'+id
}

const Video = React.createClass({
	getInitialState() {
		return {
			article: this.props.article,
			video: getVimeoUrl(this.props.article.custom_fields.video_id[0]),
			title: createMarkup(this.props.article.title),
			excerpt: createMarkup(this.props.article.custom_fields.excerpt[0]),
			contributors: createMarkup(this.props.article.custom_fields.contributors[0]),
			video_copy: createMarkup(this.props.article.custom_fields.video_copy[0]),
			tags: getArticleTags(this.props.article.tags)
		};
	},
	render() {

		return (
			<div key={Math.random(100)}>	
				<div className="embed-responsive embed-responsive-16by9">
					<iframe width="100%" height="100%" className="embed-responsive-item" src={this.state.video}></iframe>
				</div>
				<div className={'contentarea'}>
					<h2 dangerouslySetInnerHTML={this.state.title}/>
					<h3 className="" dangerouslySetInnerHTML={this.state.excerpt}/>
					<div className="author" dangerouslySetInnerHTML={this.state.contributors}/> 
					<div id="top-bar">
						<ShareBar id="fade-bar" props={this.props.article}/>
					</div>
					<hr/>
				</div>
				<div className="long_form content" dangerouslySetInnerHTML={this.state.video_copy}/>
				<div id="bottom-box">
					<hr className="short-rule"/>
					<ShareBar props={this.props.article}/>
					<p className="tags_wrapper">Tags: {this.state.tags}</p>
				</div>
			</div>
		)
	}
});

export default Video