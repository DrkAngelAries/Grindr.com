/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Press from '../components/Press'

const mapStateToProps = (state, ownProps) => ({
	item:  state.pages.filter(function(v) {
		return v.slug === 'press'
	})[0]
});

export default connect(mapStateToProps)(Press);