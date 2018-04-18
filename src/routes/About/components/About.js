import React from 'react'
import './About.scss'
import { getImage, setCoverBackgroundStyle, setSimpleCoverBackgroundStyle, createMarkup} from '../../../components/Helpers'
import { Link } from 'react-router'
import DocumentMeta from 'react-document-meta'

const putMetaData = (item) => {
	const meta = {
		title: 'About Grindr',
		description: item.content,
		canonical: 'http://www.grindr.com/'+item.slug.toString(),
		meta: {
			charSet: 'utf-8',
			name: {
				keywords: 'About Grindr'
			},
			itemProp: {
				name: 'About Grindr',
				description: item.content,
				image: 'http://example.com/image.jpg'
			},
			property: {
				'og:title': 'About Grindr',
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

export const About = ({item}) => (

	<div className={'container about page'}>
		{putMetaData(item)}
		<div className={'hero'}>
			<img src={getImage(item, item.custom_fields.main_image[0])}></img>
		</div>
		<div className="page-content">
			<h1 className="text-uppercase">{item.title}</h1>
			<div className='abouttext'>
				<p>Since launching in 2009, Grindr has quickly grown into the world’s largest social networking app for gay, bi, trans, and queer people. With millions of daily users spanning almost every country in every corner of the planet, Grindr brings you zero feet away from connecting to a community that grows stronger every day.</p>
				<p>Now more than just a means to chat and meet, Grindr is providing a welcoming window into a passionate and progressive lifestyle. Our rapidly expanding content and collaborations in photography, fashion, social issues and more mark a bold and exciting new chapter in our evolution.</p>
				<p><strong>Can you keep up?</strong></p>
			</div>
		</div>

		<div className={'favorites'}>

			<Link  className={'article'} to={'/press'} style={setSimpleCoverBackgroundStyle('/wp-content/uploads/2017/01/23182051/About_Profileimages.png')}>
				<div className="fav-content">
					<img className="fav-star" src="/img/favorites.svg"/>
					<span>PRESS & NEWS</span>
				</div>
			</Link>

			<Link  className={'article'} to={'/careers' } style={setSimpleCoverBackgroundStyle('/wp-content/uploads/2017/01/23182051/About_Profileimages2.png')}>
				<div className="fav-content">
					<img className="fav-star" src="/img/favorites.svg"/>
					<span>CAREERS</span>
				</div>
			</Link>

			<a  className={'article'} href="https://grindr.tumblr.com/" target="_blank" style={setSimpleCoverBackgroundStyle('/wp-content/uploads/2017/01/23182052/About_Profileimages4.png')}>
				<div className="fav-content">
					<img className="fav-star" src="/img/favorites.svg"/>
					<span>BLOG</span>
				</div>
			</a>

			<Link  className={'article'} to={'/contact'} style={setSimpleCoverBackgroundStyle('/wp-content/uploads/2017/01/23182052/About_Profileimages3.png')}>
				<div className="fav-content">
					<img className="fav-star" src="/img/favorites.svg"/>
					<span>CONTACT US</span>
				</div>
			</Link>

			<Link  className={'article'} to={'/gay-advertising' } style={setSimpleCoverBackgroundStyle('/wp-content/uploads/2017/01/23182053/About_Profileimages5.png')}>
				<div className="fav-content">
					<img className="fav-star" src="/img/favorites.svg"/>
					<span>ADVERTISE</span>
				</div>
			</Link>

			<a className={'article'} href={'https://help.grindr.com/' } target="_blank" style={setSimpleCoverBackgroundStyle('/wp-content/uploads/2017/01/23182053/About_Profileimages6.png')}>
				<div className="fav-content">
					<img className="fav-star" src="/img/favorites.svg"/>
					<span>APP SUPPORT</span>
				</div>
			</a>

		</div>
	</div>
)

About.propTypes = {
	item: React.PropTypes.object
}

export default About
