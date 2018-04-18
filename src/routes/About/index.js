export default (store) => ({
  path:'about',
  getComponent (nextState, next) {
    require.ensure([
      './containers/AboutContainer',
    ], (require) => {
      const About = require('./containers/AboutContainer').default
      next(null, About)
    })
  }
})