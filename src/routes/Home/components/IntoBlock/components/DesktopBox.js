import React from 'react'
import { isSlideShow } from '../../Functions.js'
import { Link, browserHistory } from 'react-router'
import { createMarkup, createMarkupWBR, setCoverBackgroundStyle, limitChars} from '../../../../../components/Helpers'
import Tags from '../../Tags'

const Desktop = React.createClass({
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

	getEmpty(boxclass){
		return <div className={boxclass+' emptybox'}/>
	},

	getEmpty5(boxclass){
		return <div className={boxclass+' emptybox5'}/>
	},

	getBackgroundImgByType(cf, background){
		switch(background){
			case 'land-square':
				return cf.main_image_landscape[0]
				break;
			case 'landscape':
				return cf.main_image_landscape[0]
				break;
			case 'square':
				return cf.main_image_square[0]
				break;
			case 'tall':
				return cf.main_image_tall[0]
				break;
			default:
				return cf.main_image_landscape[0]
				break;
		}
	},

	desktop_Box(boxclass, item, background){
		return (
			<Link className={boxclass} to={'/into/'+item.slug }>
				<div className={'hero'} style={setCoverBackgroundStyle(item, this.getBackgroundImgByType(item.custom_fields, background))}>
					{isSlideShow(item)}
					<h2 dangerouslySetInnerHTML={createMarkupWBR(item.title)}/>	
				</div>
				<Tags tags={item.tags}/>
				{item.custom_fields.hasOwnProperty('grind_excerpt') ? (
					<p dangerouslySetInnerHTML={createMarkupWBR(limitChars(item.custom_fields.grind_excerpt[0], background))}/>
				) : (
					<p/>
				)}
				<h4 className="read-more">Read More</h4>
			</Link>
		)
	},

	Clockwise(a, i){
		return (
			<div key={'archive_'+i} className="into-desktop hidden-xs hidden-sm clockwise">
				<div className="subblock_2 marginright">
					{(a[0]) ? this.desktop_Box('into-1 col-md-12', a[0], 'landscape') : this.getEmpty('into-1 col-md-12')}
					<div className="col-md-12">
						{(a[4]) ? this.desktop_Box('into-5 col-md-6 marginright', a[4], 'square') : this.getEmpty5('into-5 col-md-6 marginright')}
						{(a[3]) ? this.desktop_Box('into-4 col-md-6 marginboth', a[3], 'square') : this.getEmpty('into-4 col-md-6 marginboth')}
					</div>
				</div>
				<div className="subblock_1">
					{(a[1]) ? this.desktop_Box('into-2', a[1], 'land-square') : this.getEmpty('into-2')}
					{(a[2]) ? this.desktop_Box('into-3', a[2], 'tall') : this.getEmpty('into-3')}
				</div>
			</div>
		)
	},

	CounterClockwise(a, i){
		return (
			<div key={'archive_'+i} className="into-desktop hidden-xs hidden-sm counter-clockwise">
				<div className="subblock_1">
					{(a[1]) ? this.desktop_Box('into-2', a[1], 'land-square') : this.getEmpty('into-2')}
					{(a[2]) ? this.desktop_Box('into-3', a[2], 'tall') : this.getEmpty('into-3')}
				</div>
				<div className="subblock_2 marginleft">
					{(a[0]) ? this.desktop_Box('into-1', a[0], 'landscape') : this.getEmpty('into-1')}
					<div className="col-md-12">
						{(a[3]) ? this.desktop_Box('into-4 col-md-6 marginboth', a[3], 'square') : this.getEmpty('into-4 col-md-6 marginboth')}
						{(a[4]) ? this.desktop_Box('into-5 col-md-6 marginleft', a[4], 'square') : this.getEmpty('into-5 col-md-6 marginleft')}
					</div>
				</div>
			</div>
		)
	},

	render() {
		return (
			( this.state.index % 2 ) ? this.Clockwise( this.state.group, this.state.index ) : this.CounterClockwise( this.state.group, this.state.index ) 
		)
	}
})

export default Desktop