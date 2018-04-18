import React from 'react'
import './HomeView.scss'
import { getFavorites, putMetaData} from './Functions.js'
import Featured from './Featured'
import Favorites from './Favorites'
import Archive from './Archive'
import IntoBlock from './IntoBlock'

export const HomeView = ({featured}) => (
	<div className="home">
		{putMetaData(featured)}
	</div>
)

HomeView.propTypes = {
	item: React.PropTypes.object
}

export default HomeView

