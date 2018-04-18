import React from 'react'
import './BasedOnInterest.scss'
import { getImage, setBackgroundStyle, setCoverBackgroundStyle, createMarkup, createMarkupWBR, getContributors, isMobile, isFeaturedProduct } from '../../../../../components/Helpers'
import { browserHistory, Link } from 'react-router'
import { logEvent} from '../../../../../components/Analytics'

const getInterests = ( posts, tags ) => {
	let arr = [];
	posts.filter(( post, p ) => {
		tags.filter(( tag ) => {
			post.tags.filter( (ptag, i) => {
				if (tag.slug === ptag.slug){
					arr.push(post)
				}
			})
		})
	})
	return shuffleArray(killDuplicates(arr))
}

const killDuplicates = (arr) => {
	var hashTable = {};
	return arr.filter((el) => {
		var key = JSON.stringify(el);
		var match = Boolean(hashTable[key]);
		return (match ? false : hashTable[key] = true);
	})
}

const shuffleArray = (arr) => {
	// Fisher-Yates shuffle, Son!
	let i = 0
	, j = 0
	, temp = null

	for (i = arr.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1))
		temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}

	return arr
}

const goToLink = (a) => {
	logEvent({
		category:'Suggested Article', 
		action: 'click', 
		label:a.title
	})
	browserHistory.push('/into/'+a.slug)
}

const BasedOnInterest = React.createClass({

	getInitialState() {
		return {
			posts: this.props.posts,
			tags: this.props.tags,
			suggested: getInterests(this.props.posts, this.props.tags)
		};
	},

	render() {
		return (
			<div className="BasedOnInterest">
				<p className="boi_title">Based on your interest</p>
				{this.state.suggested.map((post, i) => {
					if (i<3){
						return (
							<div key={i} className={'item'} onClick={()=>goToLink(post)}>
								<div style={setCoverBackgroundStyle(post, post.custom_fields.main_image_square[0])}/>
								<p dangerouslySetInnerHTML={createMarkup(post.title)}/>
							</div>
						)
					}
				})}
			</div>
		);
	}
});

export default BasedOnInterest