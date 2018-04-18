import React from 'react'
import './Blog.scss'
import { getImage, setCoverBackgroundStyle, createMarkup } from '../../../components/Helpers'
import moment from 'moment'
import Reblog from '../assets/Reblog.svg'
import { Link } from 'react-router'

export const Blog = ({item}) => (
	<div className={'container blog page'}>
		
			{window.open('https://grindr.tumblr.com')}

	</div>
)

Blog.propTypes = {
	item: React.PropTypes.array
}

export default Blog