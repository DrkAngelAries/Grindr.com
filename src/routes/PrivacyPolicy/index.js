export default (store) => ({
  path: 'privacy-policy',
  getComponent (nextState, next) {
    require.ensure([
      './containers/PrivacyPolicyContainer',
    ], (require) => {
      const PrivacyPolicy = require('./containers/PrivacyPolicyContainer').default
      next(null, PrivacyPolicy)
    })
  }
})