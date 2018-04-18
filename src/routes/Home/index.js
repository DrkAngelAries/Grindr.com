import { injectReducer } from '../../store/reducers'

export default (store) => ({
	
	getComponent (state, next) {
		
		require.ensure([
			'./containers/HomeContainer',
		], (require) => {
			const HomeView = require('./containers/HomeContainer').default
			next(null, HomeView)
		})
	}
})






