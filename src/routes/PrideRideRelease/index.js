export default (store) => ({
//	path:'pride-ride/release-and-indemnity',
  getComponent (nextState, next) {
    require.ensure([
		'./containers/PrideRideReleaseContainer',
    ], (require) => {
		const PrideRideRelease = require('./containers/PrideRideReleaseContainer').default
		next(null, PrideRideRelease)
    })
  }
})