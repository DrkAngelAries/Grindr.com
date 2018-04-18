import React from 'react'
import { IndexLink, Link } from 'react-router'
import './PrivacyPolicy.scss'
import { createMarkup } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
	const meta = {
		title: item.title,
		description: item.excerpt,
		canonical: 'http://www.grindr.com/'+item.slug.toString(),
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: 'Grindr4Equality, G4E, gay activisim'
			},
			itemProp: {
				name: item.title,
				description: item.excerpt,
			},
			property: {
				'og:title': item.title,
				'og:type': 'article',
				'og:site_name': 'Gay Dating App & Social Network – Chat & Date on Grindr',

				'twitter:site': '@Grindr',
				'twitter:title': item.title

			}
		},
		auto: {
			ograph: true
		}
    }

	return <DocumentMeta {...meta} />
}

export const PrivacyPolicy = ({item}) => (
	<div className={'container page legal'}>
		{putMetaData(item)}
		<h1>{item.title}</h1>
		<div className={'page-content'}>
			<div dangerouslySetInnerHTML={createMarkup(item.content)} />
		</div>
	</div>
)

PrivacyPolicy.propTypes = {
  item: React.PropTypes.object
}

export default PrivacyPolicy
