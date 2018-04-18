export default (store) => ({
	path: '/safety/tajik',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyTajikContainer',
    ], (require) => {
			const SafetyTajik = require('./containers/SafetyTajikContainer').default
			next(null, SafetyTajik)
		})
	}
})
