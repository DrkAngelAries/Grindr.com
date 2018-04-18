export default (store) => ({
	path: '/safety/bengali',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyBengaliContainer',
    ], (require) => {
			const SafetyBengali = require('./containers/SafetyBengaliContainer').default
			next(null, SafetyBengali)
		})
	}
})
