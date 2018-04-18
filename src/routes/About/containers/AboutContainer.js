/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import About from '../components/About'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'about'
  })[0]
});

export default connect(mapStateToProps)(About);