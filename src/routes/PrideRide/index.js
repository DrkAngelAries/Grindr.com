export default (store) => ({
//	path:'pride-ride',
  getComponent (nextState, next) {
    require.ensure([
		'./containers/PrideRideContainer',
    ], (require) => {
		const PrideRide = require('./containers/PrideRideContainer').default
	  next(null, PrideRide)
    })
  }
})