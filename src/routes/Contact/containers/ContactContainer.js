/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Contact from '../components/Contact'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'contact'
  })[0]
});

export default connect(mapStateToProps)(Contact);