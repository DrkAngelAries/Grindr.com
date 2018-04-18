/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import StyleGuide from '../components/StyleGuide'

const mapStateToProps = (state, ownProps) => ({
  item:  'style'
});

export default connect(mapStateToProps)(StyleGuide);