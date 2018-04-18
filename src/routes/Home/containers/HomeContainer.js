/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import HomeView from '../components/HomeView'

const mapStateToProps = (state, ownProps) => ({
	featured: state.featured,
//	item: window.location.href = '/about'
})

export default connect(mapStateToProps)(HomeView)


