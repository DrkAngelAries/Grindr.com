import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Gaymoji1.scss'
import { createMarkup, replaceAmp } from '../../../components/Helpers'
import type { PageObject } from '../../../store/interfaces/home'
import _ from '../../../components/Helpers/underscore'
import gaymoji_img from '../assets/gaymoji_img.jpg'

export const Gaymoji1 = () => (
	<div className={'container page gaymoji1'}>
		<div className="page-content">
			<img src={gaymoji_img} />
		</div>
	</div>
)

export default Gaymoji1
