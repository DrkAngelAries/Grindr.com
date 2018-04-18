import React from 'react'
import PhotoFrames from '../assets/photoFrames.svg'
import { getImage } from '../../../components/Helpers'
import DocumentMeta from 'react-document-meta'
import $ from 'jquery'

const isMobile = $('body').hasClass('mobile')
const isTablet = $('body').hasClass('tablet')
const isDesktop = $('body').hasClass('desktop')
const getAgoTime = (d) => moment(d).fromNow()

export const doRenderDesktop = (!isMobile || isTablet || isDesktop)

export const putMetaData = (featured) => {
	const meta = {
		title: "Grindr |  The world's largest gay social network app",
		description: "Your window into the modern LGBTQ world, Into is a digital magazine that celebrates and examines the people, places, and issues that keeps our community connected.",
		canonical: "https://www.grindr.com/",
		meta: {
			charSet: "utf-8",
			name: {
				keywords: "Grindr |  The world's largest gay social network app"
			},
			itemProp: {
				name: "Grindr |  The world's largest gay social network app",
				description: "Your window into the modern LGBTQ world, Into is a digital magazine that celebrates and examines the people, places, and issues that keeps our community connected.",
		canonical: "https://www.grindr.com/",
			},
			property: {
				"og:title": "Grindr |  The world's largest gay social network app",
				"og:type": "article",
				"og:site_name": "Gay Dating App & Social Network – Chat & Date on Grindr",
				"og:url": "https://www.grindr.com/",
				"og:image": getImage(featured[0], featured[0].custom_fields.main_image[0]),
				"twitter:site": "@Grindr",
				"twitter:image": getImage(featured[0], featured[0].custom_fields.main_image[0]),
				"twitter:title": "Grindr |  The world's largest gay social network app",
				"twitter:card": "summary",
				"twitter:description": "Your window into the modern LGBTQ world, Into is a digital magazine that celebrates and examines the people, places, and issues that keeps our community connected.",
			}
		},
		auto: {
			ograph: true
		}
    }
	return <DocumentMeta {...meta} />
}

export const isSlideShow = (item) => {
	if(item.custom_fields.story_type[0]==='Slide Show') {
		return (
			<div className="slide-indicator">
				<img src={PhotoFrames}/>
				<span>{item.custom_fields.slide_show[0]}</span>
			</div>
		)
	}
}