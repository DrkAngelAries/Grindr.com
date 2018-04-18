/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Blog from '../components/Blog'

const mapStateToProps = (state, ownProps) => ({
  item:  state.tumblr
});

export default connect(mapStateToProps)(Blog);