export default (store) => ({
  path: 'careers',
  getComponent (nextState, next) {
    require.ensure([
      './containers/CareersContainer',
    ], (require) => {
      const Careers = require('./containers/CareersContainer').default
      next(null, Careers)
    })
  }
})