import React from 'react'
import { IndexLink, Link } from 'react-router'
import css from './Contact.scss'
import { getImage, setBackgroundStyle, createMarkup } from '../../../components/Helpers'
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
	const meta = {
		title: item.title.toString(),
		description: item.content,
		canonical: 'http://www.grindr.com/'+item.slug.toString(),
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: 'About grindr'
			},
			itemProp: {
				name: item.title.toString(),
				description: item.content,
				image: getImage(item, item.custom_fields.main_image[0].toString()),
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

export const Contact = ({item}) => (
	<div className='container contact page'>
		{putMetaData(item)}
		<div className={'hero'}>
				<img src={getImage(item, item.custom_fields.main_image[0])}></img>
		</div>

		<div className="page-content">
			<h1>{item.title}</h1>
			<div dangerouslySetInnerHTML={createMarkup(item.content)} />
		</div>
	</div>
)

Contact.propTypes = {
	item: React.PropTypes.object
}

export default Contact