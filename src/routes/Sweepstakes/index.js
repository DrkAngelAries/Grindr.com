export default (store) => ({
	path: '/sweepstakes',
	getComponent(nextState, next) {
		require.ensure([
			'./containers/SweepstakesContainer',
    ], (require) => {
			const Sweepstakes = require('./containers/SweepstakesContainer').default
			next(null, Sweepstakes)
		})
	}
})
