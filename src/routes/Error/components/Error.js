import React from 'react'
import { Link } from 'react-router'
import './Error.scss'
import Sad from '../assets/sad.png'

export const Error = ({item}) => (
	<div className={'container page error'}>
		<h1 style={{borderBottom: 'none'}}>Error!</h1>
		<img className="sad" src={Sad}/>
		<p>Oops! Something went wrong. <br/> Head back <Link to={'/'}>home</Link>.</p>
	</div>
)

Error.propTypes = {
  item: React.PropTypes.object
}

export default Error
