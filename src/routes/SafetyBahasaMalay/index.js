export default (store) => ({
	path: '/safety/bahasa-malay',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyBahasaMalayContainer',
    ], (require) => {
			const SafetyBahasaMalay = require('./containers/SafetyBahasaMalayContainer').default
			next(null, SafetyBahasaMalay)
		})
	}
})
