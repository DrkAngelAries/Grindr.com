export default (store) => ({
  path: '*',
  getComponent (nextState, next) {
    require.ensure([
      './containers/PageNotFoundContainer',
    ], (require) => {
      const PageNotFound = require('./containers/PageNotFoundContainer').default
      next(null, PageNotFound)
    })
  }
})