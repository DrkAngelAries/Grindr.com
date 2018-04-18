export default (store) => ({
  path:'press',
  getComponent (nextState, next) {
    require.ensure([
      './containers/PressContainer',
    ], (require) => {
      const Press = require('./containers/PressContainer').default
      next(null, Press)
    })
  }
})