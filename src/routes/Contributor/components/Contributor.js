/* @flow */
import React from 'react'
import './Contributor.scss'
import { getImage, getSimpleImage, setCoverBackgroundStyle, createMarkup, setSimpleCoverBackgroundStyle} from '../../../components/Helpers'
import IntoSlider from '../../../components/IntoSlider'
import moment from 'moment'
import { Link, browserHistory } from 'react-router'
import { limitWords } from '../../../components/Helpers'
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
	const meta = {
		title: item.title.toString(),
		description: item.content,
		canonical: 'http://www.grindr.com/profile/'+item.slug.toString(),
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: 'About grindr'
			},
			itemProp: {
				name: item.title.toString(),
				description: item.content,
				image: getImage(item, item.custom_fields.profile_picture[0]).toString(),
			},
			property: {
				'og:title': item.title.toString(),
				'og:type': 'article',
				'og:image': getImage(item, item.custom_fields.profile_picture[0]).toString(),
				'og:site_name': 'Gay Dating App & Social Network – Chat & Date on Grindr',

				'twitter:site': '@Grindr',
				'twitter:title': item.title.toString()

			}
		},
		auto: {
			ograph: true
		}
    }

	return <DocumentMeta {...meta} />
}

const gotoPage = (slug) => {
	browserHistory.push('/into/'+slug)
}

const getStory = (story, i):Function => {
	return (
		<div className="stories clearfix" key={'story_'+i} onClick={() => gotoPage(story.slug)}>
			<hr/>
			<div key={'into_'+i}>
				<div className="left_column col-md-2 kill-padding clearfix">
					<div className="story_image visible-xs visible-sm" style={setCoverBackgroundStyle(story, story.custom_fields.main_image_landscape[0])}></div>
					<div className="story_image hidden-xs hidden-sm" style={setCoverBackgroundStyle(story, story.custom_fields.main_image_square[0])}></div>
				</div>
				<div className="right_column col-md-5 kill-padding clearfix">
					<h5>{moment(story.date).format('dddd, MMMM Do')}</h5>
					<h4>{story.title}</h4>
					<p>{limitWords(story.custom_fields.grind_excerpt[0], 30)}</p>
					<Link className={'into-box'} to={'/into/'+story.slug }>Read More</Link>
				</div>
			</div>
		</div>
	)
}

export const Contributor = ({item, into, stories}) => (
	<div className="contributor container page">
		{putMetaData(item)}
		<div key={item.id}>
			<div className="profile clearfix">
				<div className="col-md-6 left_column clearfix">
					<div className="profile_image" style={setCoverBackgroundStyle(item, item.custom_fields.profile_picture[0])}></div>
				</div>
				<div className="col-md-6 right_column clearfix">
					<h2 dangerouslySetInnerHTML={createMarkup(item.title)}/>
					<h5>{item.custom_fields.location[0]+' | '+item.custom_fields.occupation[0]}</h5>
					<p className="" dangerouslySetInnerHTML={createMarkup(item.content)}/>
				</div>
			</div>
			{stories.map(function(story, i){
				return getStory(story, i)
			})}
		</div>
		<IntoSlider posts={into}/>
	</div>
)

Contributor.propTypes = {
	item: React.PropTypes.object,
	into: React.PropTypes.array,
	stories: React.PropTypes.array
}

export default Contributor

