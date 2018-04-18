export default (store) => ({
	path: '/safety/kiswahili',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyKiswahiliContainer',
    ], (require) => {
			const SafetyKiswahili = require('./containers/SafetyKiswahiliContainer').default
			next(null, SafetyKiswahili)
		})
	}
})
