export default (store) => ({
	path: '/safety/urdu',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyUrduContainer',
    ], (require) => {
			const SafetyUrdu = require('./containers/SafetyUrduContainer').default
			next(null, SafetyUrdu)
		})
	}
})
