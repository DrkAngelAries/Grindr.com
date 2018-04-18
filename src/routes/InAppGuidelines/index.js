import InAppGuidelinesView from './components/InAppGuidelinesView'

export default () => ({
  path: 'app/guidelines',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      cb(null, InAppGuidelinesView)
    /* Webpack named bundle   */
    }, 'inappguidelines')
  }
})
