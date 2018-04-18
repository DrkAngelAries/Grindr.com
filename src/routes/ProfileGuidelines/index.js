export default (store) => ({
  path: 'profile-guidelines',
  getComponent (nextState, next) {
    require.ensure([
      './containers/ProfileGuidelinesContainer',
    ], (require) => {
      const ProfileGuidelines = require('./containers/ProfileGuidelinesContainer').default
      next(null, ProfileGuidelines)
    })
  }
})