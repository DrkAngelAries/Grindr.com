export default (store) => ({
	path: '/safety/farsi',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyFarsiContainer',
    ], (require) => {
			const SafetyFarsi = require('./containers/SafetyFarsiContainer').default
			next(null, SafetyFarsi)
		})
	}
})
