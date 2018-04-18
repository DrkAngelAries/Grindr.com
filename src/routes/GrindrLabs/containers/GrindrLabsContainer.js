/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import GrindrLabs from '../components/GrindrLabs'


const mapStateToProps = (state, ownProps) => ({
	item: window.location.href = 'https://github.com/grindrlabs'
})

export default connect(mapStateToProps)(GrindrLabs)