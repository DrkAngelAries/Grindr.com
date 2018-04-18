export default (store) => ({
  path: 'error',
  getComponent (nextState, next) {
    require.ensure([
      './containers/ErrorContainer',
    ], (require) => {
      const Error = require('./containers/ErrorContainer').default
      next(null, Error)
    })
  }
})