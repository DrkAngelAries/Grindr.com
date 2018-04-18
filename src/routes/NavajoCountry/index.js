export default (store) => ({
	path: '/safety/navajo-country',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/NavajoCountryContainer',
    ], (require) => {
			const NavajoCountry = require('./containers/NavajoCountryContainer').default
			next(null, NavajoCountry)
		})
	}
})
