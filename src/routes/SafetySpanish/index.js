export default (store) => ({
	path: '/safety/spanish',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetySpanishContainer',
    ], (require) => {
			const SafetySpanish = require('./containers/SafetySpanishContainer').default
			next(null, SafetySpanish)
		})
	}
})
