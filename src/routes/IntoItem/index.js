import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path:'into/:slug',
  getComponent (nextState, next) {
    require.ensure([
      './containers/IntoItemContainer',
    ], (require) => {
      const IntoItem = require('./containers/IntoItemContainer').default
      next(null, IntoItem)
    })
  }
})