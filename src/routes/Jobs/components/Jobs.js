import React from 'react'
import { browserHistory } from 'react-router'

export const Jobs = ({item, jobs}) => (

	<div className="container jobs page">
		{browserHistory.push('/careers')}
	</div>
)

Jobs.propTypes = {
	item: React.PropTypes.object,
	jobs: React.PropTypes.array
}

export default Jobs

//vimeo video
//	<div className="embed-responsive embed-responsive-16by9">
//		<iframe width="100%" height="100%" className="embed-responsive-item" src="https://player.vimeo.com/video/201766665?autoplay=1"></iframe>
//	</div>