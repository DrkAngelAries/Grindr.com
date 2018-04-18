export default (store) => ({
	path: '/safety/english',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyEnglishContainer',
    ], (require) => {
			const SafetyEnglish = require('./containers/SafetyEnglishContainer').default
			next(null, SafetyEnglish)
		})
	}
})
