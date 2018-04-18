import React from 'react'
import { connect } from 'react-redux'
import Contributor from '../components/Contributor'

const getStories = (state, ownProps) => {
	const author = state.profiles.filter((author) => author.slug === ownProps.params.slug)[0];
	const id = author.custom_fields.contributor[0];
	const stories = state.posts.filter(function(post) {
		let length = +post.custom_fields.contributors[0]
		for(let i=0;i<length;i++){
			if (id === post.custom_fields['contributors_'+i+'_user'][0]){
				return true
			}
		}
	})
	console.table(stories)
	return stories;
}

const mapStateToProps = (state, ownProps) => (console.log('ContributorContainer', ownProps.params.slug), {
  item: state.profiles.filter(function(v) {
    return v.slug === ownProps.params.slug
  })[0],
  into: state.posts.filter(function(v) {
      return v.categories[0].slug === 'into'
  }),
  stories: getStories(state, ownProps)
});

export default connect(mapStateToProps)(Contributor);