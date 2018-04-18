import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

import { logPageView } from '../components/Analytics'
import { addDeviceClassToBody, forceTrailingSlash, forceTrailingSlashOnChange } from '../components/Helpers'


browserHistory.listen( location =>  {
	logPageView()
	forceTrailingSlash()
})

class AppContainer extends Component {
	static propTypes = {
		routes : PropTypes.object.isRequired,
		store  : PropTypes.object.isRequired,
		loaded : PropTypes.bool.isRequired
	}

	constructor() {
		super()
		this.state = {loaded : false}
	}
	componentDidUpdate() {
		logPageView()
	}
	componentWillMount = (nextState, replace, callback) => {
		const { store } = this.props
		store.dispatch({type: 'GET_JSON_DATA', _this: this})
		addDeviceClassToBody()
	}
	componentDidMount = (nextState, replace) => {
		logPageView()
	}

	shouldComponentUpdate () {
		return true
	}

	render () {
		const { routes, store } = this.props
		if(this.state.loaded){
			return (
				<Provider store={store}>
					<div style={{ height: '100%' }}>
						<Router history={browserHistory} children={routes}/>
					</div>
				</Provider>
			)
		}else{
			return <div></div>
		}
	}
}

export default AppContainer