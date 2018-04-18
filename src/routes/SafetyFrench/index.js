export default (store) => ({
	path: '/safety/french',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyFrenchContainer',
    ], (require) => {
			const SafetyFrench = require('./containers/SafetyFrenchContainer').default
			next(null, SafetyFrench)
		})
	}
})
