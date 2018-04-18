/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Advertise from '../components/Advertise'

const mapStateToProps = (state, ownProps) => ({
  item:  state.pages.filter(function(v) {
    return v.slug === 'gay-advertising'
  })[0]
});

export default connect(mapStateToProps)(Advertise);