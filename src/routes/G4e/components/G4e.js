/* @flow */
import React from 'react'
import './G4e.scss'
import { getImage, setBackgroundStyle, setCoverBackgroundStyle, createMarkup, createMarkupWBR } from '../../../components/Helpers'
import type { PageObject } from '../../store/interfaces/page'
import { Carousel } from 'react-bootstrap';
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
	const meta = {
		title: item.title.toString(),
		description: item.content,
		canonical: 'http://www.grindr.com/'+item.slug.toString(),
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: 'Grindr4Equality, G4E, gay activisim'
			},
			itemProp: {
				name: item.title.toString(),
				description: item.content,
				image: getImage(item, item.custom_fields.main_image[0].toString())
			},
			property: {
				'og:title': item.title.toString(),
				'og:type': 'article',
				'og:image': getImage(item, item.custom_fields.main_image[0].toString()),
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

const getCFInitiatives = (item, cf) => {
	let l = +cf.initiatives[0]
	let arr = [];
	for(let i=0;i<l;i++){
	 let temp = {
			'img': cf['initiatives_'+i+'_image'][0],
			'title': cf['initiatives_'+i+'_title'][0],
			'date_source': cf['initiatives_'+i+'_article_date_and_source'][0],
			'excerpt': cf['initiatives_'+i+'_excerpt_text'][0],
			'link': cf['initiatives_'+i+'_link_to_article'][0],

		}
		arr.push(temp)
	}
	return arr
};

const getCFArticles = (item, cf) => {
	let l = +cf.articles[0]
	let arr = [];
	for(let i=0;i<l;i++){
	 let temp = {
			'title': cf['articles_'+i+'_title'][0],
			'excerpt': cf['articles_'+i+'_excerpt_text'][0],
			'link': cf['articles_'+i+'_link_to_article'][0],
		}
		arr.push(temp)
	}
	return arr
};

export const G4e = ({item}) => (
	<div className={'g4e container page'}>
		{putMetaData(item)}
	</div>
)

export default G4e
