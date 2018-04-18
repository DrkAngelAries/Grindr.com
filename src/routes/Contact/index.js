
export default (store) => ({
  path: 'contact',
  onEnter: window.scrollTo(0, 0),
  getComponent (nextState, next) {
    require.ensure([
      './containers/ContactContainer',
    ], (require) => {
      const Contact = require('./containers/ContactContainer').default
      next(null, Contact)
    })
  }
})