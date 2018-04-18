/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Download from '../components/Download'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'download-grindr'
  })[0]
});

export default connect(mapStateToProps)(Download);