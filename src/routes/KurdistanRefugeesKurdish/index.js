export default (store) => ({
	path: '/safety/kurdistan-refugees-kr',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/KurdistanRefugeesKurdishContainer',
    ], (require) => {
			const KurdistanRefugeesKurdish = require('./containers/KurdistanRefugeesKurdishContainer').default
			next(null, KurdistanRefugeesKurdish)
		})
	}
})
