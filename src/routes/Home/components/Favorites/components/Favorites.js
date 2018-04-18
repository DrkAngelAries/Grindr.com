import React from 'react'
import { buildIntoBlocks, getFavorites } from '../../Functions.js'
import { createMarkup, createMarkupWBR, setCoverBackgroundStyle} from '../../../../../components/Helpers'
import { logEvent} from '../../../../../components/Analytics'
import { Link, browserHistory } from 'react-router'

const Favorites = React.createClass({
	gotoFavorite(a){
		logEvent({
			category:'Favorites', 
			action: 'click', 
			label:a.title
		})
		browserHistory.push('/into/'+a.slug)
	},
	render() {
		return (
			<div key={Math.random(1000.00)} className={'favorites kill-padding'}>
				<span className={'fav-label'}>
					<h2><span className="fomo">ONLINE NOW</span> WITH GRINDR FAVS</h2>
					<p>
						CONTENT BROUGHT <br className="hidden-xs hidden-sm"/>
						TO YOU BY YOUR VERY <br/>
						OWN GRINDR POWER <br className="hidden-xs hidden-sm"/>
						HOUSE!
					</p>
				</span>
				{this.props.favs.map((a, index) => (
					(index<4) ? (
						<a  key={a.id} className={'article'} style={setCoverBackgroundStyle(a, a.custom_fields.main_image_square[0])} onClick={()=>this.gotoFavorite(a)}>
							<div className="fav-content">
								<img className="fav-star" src="/img/favorites.svg"/>
								<span dangerouslySetInnerHTML={createMarkupWBR(a.custom_fields.favorite_name[0])}/>
							</div>
						</a>
					) : (null)
				))}
			</div>
		)
	}
})

export default Favorites