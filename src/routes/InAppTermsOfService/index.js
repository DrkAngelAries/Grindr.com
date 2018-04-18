import InAppTermsOfServiceView from './components/InAppTermsOfServiceView'

export default () => ({
  path: 'app/terms-of-service',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      cb(null, InAppTermsOfServiceView)
    /* Webpack named bundle   */
    }, 'terms-of-service')
  }
})
