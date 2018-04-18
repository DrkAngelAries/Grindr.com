/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Community from '../components/Community'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'g4e'
  })[0]
});

export default connect(mapStateToProps)(Community);
