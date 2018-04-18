export default (store) => ({
	path: '/safety/nigerian-pidgin',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SafetyNigerianPidginContainer',
    ], (require) => {
			const SafetyNigerianPidgin = require('./containers/SafetyNigerianPidginContainer').default
			next(null, SafetyNigerianPidgin)
		})
	}
})
