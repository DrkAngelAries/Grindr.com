export default (store) => ({
	path: '/safety/hausa',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyHausaContainer',
    ], (require) => {
			const SafetyHausa = require('./containers/SafetyHausaContainer').default
			next(null, SafetyHausa)
		})
	}
})
