export default (store) => ({
	path: '/safety/bahasa-indonesia',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyBahasaIndonesiaContainer',
    ], (require) => {
			const SafetyBahasaIndonesia = require('./containers/SafetyBahasaIndonesiaContainer').default
			next(null, SafetyBahasaIndonesia)
		})
	}
})
