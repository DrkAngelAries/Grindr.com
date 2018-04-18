export default (store) => ({
	path: '/safety/russian',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyRussianContainer',
    ], (require) => {
			const SafetyRussian = require('./containers/SafetyRussianContainer').default
			next(null, SafetyRussian)
		})
	}
})
