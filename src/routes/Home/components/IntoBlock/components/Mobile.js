import React from 'react'
import { isSlideShow } from '../../Functions.js'
import { getImage, createMarkup, createMarkupWBR, setCoverBackgroundStyle} from '../../../../../components/Helpers'
import { logEvent} from '../../../../../components/Analytics'
import { Link, browserHistory } from 'react-router'
import Tags from '../../Tags'
import Circle from '../../../assets/circle.svg'
import moment from 'moment'
import $ from 'jquery'
const getAgoTime = (d) => moment(d).fromNow()

const Mobile = React.createClass({
	getInitialState() {
		return {
			group: this.props.group,
			index: this.props.index,
			loaded: false,
			boxIndex: 0,
			style: {}
		}
	},

	componentDidMount() {
	},

	detectImgLoad(id, a, main){

		//console.log(this.state.boxIndex, this.state.loaded)
		if(this.state.boxIndex<this.state.group.length-1){
			if(!$('.into-desktop').is(':visible')) $('.loader').show()
			this.setState({
				boxIndex: this.state.boxIndex+1,
				loaded: false
			})
		}else{
			$(main+' .into-mobile').fadeIn()
			if(!$('.into-desktop').is(':visible')) {
				$('.loader').fadeOut() 
				$('.favorites').last().fadeIn()
			}
			this.setState({
				boxIndex: 0,
				loaded: true
			})

		}
	},

	componentWillUnmount() {
	},

	getBox( a, i, main){
		return(
			<Link id={'mbox_'+a.id} key={'mobileBox_'+i} className={'into-box'} onClick={()=> browserHistory.push('/into/'+a.slug)}>
				<img
					className={'hidden-img-loader'}
					style={{display: 'none'}}
					src={getImage(a, a.custom_fields.main_image_landscape[0])}
					onLoad={() => this.detectImgLoad('#mbox_'+a.id, a, main)}
				/>
				<div className={'hero'} style={setCoverBackgroundStyle(a, a.custom_fields.main_image_landscape[0])}>
					<Tags tags={a.tags}/>
					{isSlideShow(a)}
					<h2 dangerouslySetInnerHTML={createMarkupWBR(a.title)}/>
					<p><img className="circle" src={Circle}/>{getAgoTime(a.date)}</p>
				</div>
			</Link>
		)
	},

	render() {
		return (
			<div id={'mobile_'+this.state.index} >
				<div key={'mobile_'+this.state.index} className="into-mobile hidden-md hidden-lg hidden-xl" style={{display:'none'}}>
					{this.state.group.map((item, index) => this.getBox(item, index, '#mobile_'+this.state.index))}
				</div>
			</div>
		)
	}
})

export default Mobile