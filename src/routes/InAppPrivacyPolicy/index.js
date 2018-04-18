import InAppPrivacyPolicyView from './components/InAppPrivacyPolicyView'

export default () => ({
  path: 'app/privacy-policy',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      cb(null, InAppPrivacyPolicyView)
    /* Webpack named bundle   */
    }, 'privacy-policy')
  }
})
