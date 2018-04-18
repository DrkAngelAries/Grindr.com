/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Careers from '../components/Careers'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'jobs'
  })[0],
  jobs:  state.jobs
});

export default connect(mapStateToProps)(Careers);