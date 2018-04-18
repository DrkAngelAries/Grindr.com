/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import ProfileGuidelines from '../components/ProfileGuidelines'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'profile-guidelines'
  })[0]
});

export default connect(mapStateToProps)(ProfileGuidelines);