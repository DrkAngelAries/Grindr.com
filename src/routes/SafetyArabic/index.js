export default (store) => ({
	path: '/safety/arabic',
	getComponent(nextState, next) {
		require.ensure([
		'./containers/SafetyArabicContainer',
    ], (require) => {
			const SafetyArabic = require('./containers/SafetyArabicContainer').default
			next(null, SafetyArabic)
		})
	}
})
