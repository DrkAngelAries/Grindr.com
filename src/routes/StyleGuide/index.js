export default (store) => ({
  path: 'style-guide',
  getComponent (nextState, next) {
    require.ensure([
      './containers/StyleGuideContainer',
    ], (require) => {
      const StyleGuide = require('./containers/StyleGuideContainer').default
      next(null, StyleGuide)
    })
  }
})