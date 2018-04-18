export default (store) => ({
	path: '/safety/azeri',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyAzeriContainer',
    ], (require) => {
			const SafetyAzeri = require('./containers/SafetyAzeriContainer').default
			next(null, SafetyAzeri)
		})
	}
})
