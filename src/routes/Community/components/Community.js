/* @flow */
import React from 'react'
import './Community.scss'
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

export const Community = ({item}) => (
	<div className={'community container page'}>
		{putMetaData(item)}
		<div className={'hero'}>
			<img src={getImage(item, item.custom_fields.main_image[0])}></img>
		</div>
		<div className="page-content">

			<div className={'col-xs-12 kill-padding'}>
				<div className={'mca1_section1 contain_section'}>
					<p dangerouslySetInnerHTML={createMarkup(item.custom_fields.section_one_0_section_content[0])} />
				</div>
			</div>

			<div className={'articles col-xs-12 col-md-push-5 col-md-7 kill-padding'}>
				<h1 className="text-uppercase contain_section">ARTICLES<hr/></h1>
				{getCFInitiatives(item, item.custom_fields).map(function(a, index){
					return (
						<a className={'mca2_sections'} key={'mca2'+index} href={a.link} target="_blank">
							<h2 style={setCoverBackgroundStyle(item, a.img)}><span>{a.title}</span></h2>
							<p className="contain_section" dangerouslySetInnerHTML={createMarkup(a.excerpt)}/>
							<span className="contain_section">Read more</span>
						</a>


					);
				})}

			</div>

			<div className={'col-xs-12 col-md-1 text-left'}></div>

			<div className={'initiatives col-xs-12 col-md-pull-8 col-md-4 kill-padding'}>
				<h1 className="text-uppercase contain_section">INITIATIVES<hr/></h1>
				{getCFArticles(item, item.custom_fields).map(function(a, index){
					return (
						<a className="contain_section" key={'mca3'+index} href={a.link} target="_blank">
							<strong>{a.title}</strong>
							<p dangerouslySetInnerHTML={createMarkup(a.excerpt)}/>
							<span>Read more</span>
							<hr/>
						</a>

					);
				})}
			</div>
		</div>

	</div>
)

export default Community
