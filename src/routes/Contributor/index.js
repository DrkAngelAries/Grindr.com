import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path:'profile/:slug',
  getComponent (nextState, next) {
    require.ensure([
      './containers/ContributorContainer',
    ], (require) => {
      const Contributor = require('./containers/ContributorContainer').default
      next(null, Contributor)
    })
  }
})