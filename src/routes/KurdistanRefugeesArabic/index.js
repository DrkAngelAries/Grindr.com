export default (store) => ({
	path: '/safety/kurdistan-refugees-ar',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/KurdistanRefugeesArabicContainer',
    ], (require) => {
			const KurdistanRefugeesArabic = require('./containers/KurdistanRefugeesArabicContainer').default
			next(null, KurdistanRefugeesArabic)
		})
	}
})
