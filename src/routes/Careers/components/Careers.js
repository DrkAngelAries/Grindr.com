import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Careers.scss'
import { getImage, setSimpleBackgroundStyle, createMarkup } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
	const meta = {
		title: 'Careers at Grindr',
		description: item.content,
		canonical: 'http://www.grindr.com/'+item.slug.toString(),
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: 'Careers at Grindr'
			},
			itemProp: {
				name: 'Careers at Grindr',
				description: item.content,
			},
			property: {
				'og:title': 'Careers at Grindr',
				'og:type': 'article',
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

export const Careers = ({item, jobs}) => (

	<div className="container jobs page">
		{putMetaData(item)}
		{console.log(jobs)}
		<div className={'hero'}>
			<img src={getImage(item, item.custom_fields.main_image[0])}></img>
		</div>
		<div className="page-content">
			<h1 dangerouslySetInnerHTML={createMarkup(item.title)} />
			<div>
				<p>Believe the hype. Since 2009, Grindr has quickly grown into the world’s largest social network for gay, bi, trans, and queer people, with over three million daily users in almost every country on the planet.  We’re everywhere, and our reach is continuing to expand as our brand evolves. More than just a digital space to meet, Grindr also executes successful initiatives aimed at advancing LGBTQ issues including equality, social justice, health, and more.</p>
				<p>In other words: We’re freakin’ busy.</p>
				<p>Behind the grid, Grindr is an inclusive and passionate family of thinkers, innovators, leaders, and most importantly, doers. Our platform is built on the power of connections, and it guides us in everything we do. We are fueled by an endless curiosity, an ability to embrace change, a respectful and collaborative work environment, and a knack for crossing every finish line. Come hang with us.</p>
				<p>Check out our open positions and be a part of a company that’s all about bringing an ever-growing global community together.</p>
			</div>
			<h3>LATEST OPENINGS</h3>
			<div className="">
				{jobs.map(function(a, index){
					return (
						<div className={'job_item col-md-6 kill-padding'} key={a.id}>
							<a href={a.absolute_url} className={'contentarea'} target="_blank">
								<h4>{a.title} <span className="arrow">></span></h4>
							</a>
							{(a.departments.length>0) ? <p><i>{a.departments[0].name}</i></p> : null}
								
							<p className="yellow" >{a.location.name}</p>
						</div>
					)
				})}
				
			</div>
		</div>
	</div>
)

Careers.propTypes = {
	item: React.PropTypes.object,
	jobs: React.PropTypes.array
}

export default Careers