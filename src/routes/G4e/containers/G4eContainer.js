/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import G4e from '../components/G4e'

const mapStateToProps = (state, ownProps) => ({
  item: window.location.href = '/community'
});

export default connect(mapStateToProps)(G4e);
