/* @flow */
import React from 'react'
import './Press.scss'
import { getImage, setCoverBackgroundStyle, createMarkup } from '../../../components/Helpers'
import { Link } from 'react-router'
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
	const meta = {
		title: 'Press & News',
		description: item.content,
		canonical: 'http://www.grindr.com/'+item.slug.toString(),
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: 'Grindr4Equality, G4E, gay activisim'
			},
			itemProp: {
				name: 'Press & News',
				description: item.content,
				image: getImage(item, item.custom_fields.main_image[0].toString())
			},
			property: {
				'og:title': 'Press & News',
				'og:type': 'article',
				'og:image': getImage(item, item.custom_fields.main_image[0].toString()),
				'og:site_name': 'Gay Dating App & Social Network – Chat & Date on Grindr',

				'twitter:site': '@Grindr',
				'twitter:title': 'Press & News'

			}
		},
		auto: {
			ograph: true
		}
    }

	return <DocumentMeta {...meta} />
}

const getCFields = (item, cf) => {
	let l = +cf.news_and_press[0]
	let articles = [];
	for(let i=0;i<l;i++){
	 let temp = {
			'title': cf['news_and_press_'+i+'_title'][0],
			'image': cf['news_and_press_'+i+'_image'][0],
			'credit': cf['news_and_press_'+i+'_image_credit'][0],
			'excerpt': cf['news_and_press_'+i+'_excerpt_text'][0],
			'link': cf['news_and_press_'+i+'_link_to_article'][0]
		}
		articles.push(temp)
	}
	return articles
};

export const Press = ({item}) => (
	<div className={'press container page'}>
		{putMetaData(item)}
		<div className={'hero'}>
			<img src={getImage(item, item.custom_fields.main_image[0])}></img>
		</div>
		<div className="page-content">

			<div className={'press_news col-xs-12 col-md-push-5 col-md-7 kill-padding'}>
				<h1 className="text-uppercase">PRESS & NEWS</h1>
				{getCFields(item, item.custom_fields).map(function(a, index){
					let _this = this;
					return (
						<div key={index}>
							<h5 dangerouslySetInnerHTML={createMarkup(a.credit)} />
							<h4 dangerouslySetInnerHTML={createMarkup(a.title)} />
							<p dangerouslySetInnerHTML={createMarkup(a.excerpt+'<br/><a href="'+a.link+'" target="_blank">Read more</a>')}/>
							<hr/>
						</div>
					);
				})}

			</div>

			<div className={'col-xs-12 col-md-1 text-left'}></div>

			<div className={'press_assets col-xs-12 col-md-pull-8 col-md-4 kill-padding'}>
				<h1 className="text-uppercase">PRESS ASSETS</h1>
				<div dangerouslySetInnerHTML={createMarkup(item.content)} />
				<a className="presskit_link" href="/adkit/Grindr-PressKit_2017.zip" target="_blank"><img src="/img/icons/Download.svg"/>DOWNLOAD PRESS KIT</a>
			</div>
		</div>

	</div>
)

Press.propTypes = {
	item: React.PropTypes.object
}

export default Press
