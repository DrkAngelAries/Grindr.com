import React from 'react'
import { getFavorites } from '../../Functions.js'
import { setCoverBackgroundStyle } from '../../../../../components/Helpers'
import IntoBlock from '../../IntoBlock'
import Favorites from '../../Favorites'
import $ from 'jquery'

const Archive = React.createClass({
	getInitialState() {
		return {
			group: 1,
			groups: this.props.groups,
			content: []
		}
	},
	bootyCall() {
		// Detect when the bottom of the page is reached & load next group
		if(window.location.pathname==='/') {
			//console.log((document.body.scrollHeight === document.body.scrollTop + window.innerHeight), document.body.scrollHeight,document.body.scrollTop,window.innerHeight)
			if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
				if (this.state.group < this.state.groups.length-1){
					//console.log("$('.loader').is(':visible')", $('.loader').is(':visible'))
					if(!$('.loader').is(':visible')) this.appendContent()
				}else{
					window.removeEventListener("scroll", this.bootyCall)
				}
			}
		}
	},
	appendContent() {
		const group = this.state.group+1
		const newArray = this.state.content.slice()

		//console.log('group', group)
		newArray.push(
			<IntoBlock key={group} group={this.state.groups[group]} index={group}/>
		)
		if ((group-3) % 3 === 0) newArray.push(<Favorites key={'fav_'+group} favs={this.props.favorites}/>)
		this.setState({
			group: group,
			content: newArray
		})
	},
	componentDidMount() {
		window.addEventListener("scroll", this.bootyCall)
	},
	componentWillUnmount() {
		window.removeEventListener("scroll", this.bootyCall)
	},
	render() {
		return (
			<div>
				<div key="_archive">{this.state.content}</div>
				<img className="loader" src="/img/gogoboydancin.gif"/>
			</div>
		)
	}
})

export default Archive