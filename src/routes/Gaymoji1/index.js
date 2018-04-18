export default (store) => ({
	path: '/gaymoji1',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/Gaymoji1Container',
    ], (require) => {
			const Gaymoji1 = require('./containers/Gaymoji1Container').default
			next(null, Gaymoji1)
		})
	}
})
