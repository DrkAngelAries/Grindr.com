export default (store) => ({
	path: '/safety/turkey-refugees-farsi',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/TurkeyRefugeesFarsiContainer',
    ], (require) => {
			const TurkeyRefugeesFarsi = require('./containers/TurkeyRefugeesFarsiContainer').default
			next(null, TurkeyRefugeesFarsi)
		})
	}
})
