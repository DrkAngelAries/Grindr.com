export default (store) => ({
	path:'grind-the-vote',
  getComponent (nextState, next) {
    require.ensure([
		'./containers/GrindTheVoteContainer',
    ], (require) => {
		const GrindTheVote = require('./containers/GrindTheVoteContainer').default
		next(null, GrindTheVote)
    })
  }
})