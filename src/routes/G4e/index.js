export default (store) => ({
  path:'g4e',
  getComponent (nextState, next) {
    require.ensure([
      './containers/G4eContainer',
    ], (require) => {
      const G4e = require('./containers/G4eContainer').default
      next(null, G4e)
    })
  }
})
