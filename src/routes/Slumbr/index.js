export default (store) => ({
//	path:'slumbr-2017',
  getComponent (nextState, next) {
    require.ensure([
		'./containers/SlumbrContainer',
    ], (require) => {
		const Slumbr = require('./containers/SlumbrContainer').default
		next(null, Slumbr)
    })
  }
})