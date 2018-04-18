/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Jobs from '../components/Jobs'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'jobs'
  })[0],
  jobs:  state.jobs
});

export default connect(mapStateToProps)(Jobs);