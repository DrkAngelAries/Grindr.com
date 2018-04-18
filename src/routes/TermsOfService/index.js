export default (store) => ({
  path: 'terms-of-service',
  getComponent (nextState, next) {
    require.ensure([
      './containers/TermsOfServiceContainer',
    ], (require) => {
      const TermsOfService = require('./containers/TermsOfServiceContainer').default
      next(null, TermsOfService)
    })
  }
})