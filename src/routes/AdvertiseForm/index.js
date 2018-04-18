export default (store) => ({
  path: 'advertise-form',
  getComponent (nextState, next) {
    require.ensure([
      './containers/AdvertiseFormContainer',
    ], (require) => {
      const AdvertiseForm = require('./containers/AdvertiseFormContainer').default
      next(null, AdvertiseForm)
    })
  }
})