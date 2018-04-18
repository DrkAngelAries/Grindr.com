export default (store) => ({
	path: '/safety/turkey-refugees',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/TurkeyRefugeesArabicContainer',
    ], (require) => {
			const TurkeyRefugeesArabic = require('./containers/TurkeyRefugeesArabicContainer').default
			next(null, TurkeyRefugeesArabic)
		})
	}
})
