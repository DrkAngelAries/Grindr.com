import React from 'react'
import { doRenderDesktop } from '../../Functions.js'
import { createMarkup, createMarkupWBR, setCoverBackgroundStyle} from '../../../../../components/Helpers'
import { logEvent} from '../../../../../components/Analytics'
import Desktop from './Desktop.js'
import Mobile from './Mobile.js'

const IntoBlock = React.createClass({
	getInitialState() {
		return {
			group: this.props.group,
			index: this.props.index,
			loaded: 'none'
		}
	},
	componentDidMount() {
		this.setState({
			loaded: 'block'
		})
	},
	componentWillUnmount() {
	},
	render() {
		return (
			<div key={'lazy-container_'+this.state.index} style={{display: this.state.loaded}}>
				<Mobile group={this.state.group} index={this.state.index} />
				{ doRenderDesktop ? <Desktop group={this.state.group} index={this.state.index} /> : null }
			</div>
		)
	}
})

export default IntoBlock