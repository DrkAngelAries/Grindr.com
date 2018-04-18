import React from 'react'
import { Link } from 'react-router'
import './AdvertiseForm.scss'

export const AdvertiseForm = ({item}) => (
	<div className={'container page advertise-form'}>
		<h1 style={{borderBottom: 'none'}}>Want to advertise with us?</h1>
		 <p>Tell us a little about yourself and how our sales team can help you.</p>
		<iframe src="https://go.pardot.com/l/184842/2016-06-13/98mr" width="100%" height="1500" type="text/html" frameBorder="0" allowTransparency="true" style={{border: 0, color:'#000000'}}></iframe>
	</div>
)

AdvertiseForm.propTypes = {
  item: React.PropTypes.object
}

export default AdvertiseForm
