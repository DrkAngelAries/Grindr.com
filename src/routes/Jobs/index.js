export default (store) => ({
  path: 'jobs',
  getComponent (nextState, next) {
    require.ensure([
      './containers/JobsContainer',
    ], (require) => {
      const Jobs = require('./containers/JobsContainer').default
      next(null, Jobs)
    })
  }
})