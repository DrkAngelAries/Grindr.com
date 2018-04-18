/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import TermsOfService from '../components/TermsOfService'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'terms-of-service'
  })[0]
});

export default connect(mapStateToProps)(TermsOfService);