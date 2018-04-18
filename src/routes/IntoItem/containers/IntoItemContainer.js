import React from 'react'
import { connect } from 'react-redux'
import IntoItem from '../components/IntoItem'
import { getInto } from '../../../components/Helpers'


const mapStateToProps = (state, ownProps) => ({
	
	item: window.location.href = 'https://intomore.com/into/'+ownProps.params.slug
	
})

export default connect(mapStateToProps)(IntoItem);


// users: state.profiles.filter(function(v) {
// 	return v.categories[0].slug === 'contributor'
// }),