import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'gay-advertising',
  onEnter: window.scrollTo(0, 0),
  getComponent (nextState, next) {
    require.ensure([
      './containers/AdvertiseContainer',
    ], (require) => {
      const Advertise = require('./containers/AdvertiseContainer').default
      next(null, Advertise)
    })
  }
})