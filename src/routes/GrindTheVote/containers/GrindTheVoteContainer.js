/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import GrindTheVote from '../components/GrindTheVote'


const mapStateToProps = (state, ownProps) => ({
//	item: window.location.href = 'https://github.com/grindrlabs'
})

export default connect(mapStateToProps)(GrindTheVote)