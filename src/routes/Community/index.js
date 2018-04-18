export default (store) => ({
  path:'community',
  getComponent (nextState, next) {
    require.ensure([
      './containers/CommunityContainer',
    ], (require) => {
      const Community = require('./containers/CommunityContainer').default
      next(null, Community)
    })
  }
})
