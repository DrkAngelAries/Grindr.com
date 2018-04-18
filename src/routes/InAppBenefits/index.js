import InAppBenefitsView from './components/InAppBenefitsView'

export default () => ({
  path: 'app/benefits',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      cb(null, InAppBenefitsView)
    /* Webpack named bundle   */
    }, 'inappbenefits')
  }
})
