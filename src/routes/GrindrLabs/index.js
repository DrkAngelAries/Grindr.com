export default (store) => ({
	path:'grindrlabs',
  getComponent (nextState, next) {
    require.ensure([
		'./containers/GrindrLabsContainer',
    ], (require) => {
		const GrindrLabs = require('./containers/GrindrLabsContainer').default
		next(null, GrindrLabs)
    })
  }
})