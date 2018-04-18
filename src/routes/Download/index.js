export default (store) => ({
  path: 'download-grindr',
  onEnter: window.scrollTo(0, 0),
  getComponent (nextState, next) {
    require.ensure([
      './containers/DownloadContainer',
    ], (require) => {
      const Download = require('./containers/DownloadContainer').default
      next(null, Download)
    })
  }
})