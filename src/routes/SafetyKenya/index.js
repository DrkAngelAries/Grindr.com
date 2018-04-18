export default (store) => ({
	path: '/safety/kenya',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyKenyaContainer',
    ], (require) => {
			const SafetyKenya = require('./containers/SafetyKenyaContainer').default
			next(null, SafetyKenya)
		})
	}
})
