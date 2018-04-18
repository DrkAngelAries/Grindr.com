/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import PrivacyPolicy from '../components/PrivacyPolicy'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'privacy-policy'
  })[0]
});

export default connect(mapStateToProps)(PrivacyPolicy);