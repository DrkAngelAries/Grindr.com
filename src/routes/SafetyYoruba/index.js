export default (store) => ({
	path: '/safety/yoruba',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyYorubaContainer',
    ], (require) => {
			const SafetyYoruba = require('./containers/SafetyYorubaContainer').default
			next(null, SafetyYoruba)
		})
	}
})
