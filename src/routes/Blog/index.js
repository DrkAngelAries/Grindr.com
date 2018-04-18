export default (store) => ({
  path:'blog/:slug',
  getComponent (nextState, next) {
    require.ensure([
      './containers/BlogContainer',
    ], (require) => {
      const Blog = require('./containers/BlogContainer').default
      next(null, Blog)
    })
  }
})



