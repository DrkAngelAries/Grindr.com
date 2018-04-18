import React from 'react'
import { Link, browserHistory } from 'react-router'
import './PageNotFound.scss'
import Sad from '../assets/sad.png'

export const PageNotFound = ({item}) => (
	<div className={'container page pagenotfound'}>
		<h1 style={{borderBottom: 'none'}}>Looking?</h1>
		<img className="sad" src={Sad}/>
		<p>This page isn't gonna be much help. <br/> Head back <Link to={'/'}>home</Link>.</p>
	</div>
)

PageNotFound.propTypes = {
  item: React.PropTypes.object
}

export default PageNotFound
