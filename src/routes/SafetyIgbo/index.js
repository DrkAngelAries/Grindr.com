export default (store) => ({
	path: '/safety/igbo',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyIgboContainer',
    ], (require) => {
			const SafetyIgbo = require('./containers/SafetyIgboContainer').default
			next(null, SafetyIgbo)
		})
	}
})
