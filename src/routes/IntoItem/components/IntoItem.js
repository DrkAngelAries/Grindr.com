import React from 'react'
import './IntoItem.scss'
import { putMetaData } from '../../../components/Helpers'
import LongForm from './LongForm'
import Video from './Video'
import SlideShow from './SlideShow'
import BasedOnInterest from './BasedOnInterest'

export const IntoItem = ({item, into}) => (

	<div className="into page container">
		{putMetaData(item)}
		<div className={'col-xs-12'} key={item.id}>
			{(() => {
				switch (item.custom_fields.story_type[0]) {
					case 'Long Form':
						return (<div><LongForm key={Math.random(100)} article={item}/>
								<BasedOnInterest posts={into} tags={item.tags}/></div>)
						break;
					case 'Slide Show':
						return <SlideShow key={Math.random(100)} slides={item}/>
						break;
					case 'Video':
						return (<div><Video key={Math.random(100)} article={item}/>
								<BasedOnInterest posts={into} tags={item.tags}/></div>)
						break;
				}
			})()}
			
		</div>

	</div>
)

IntoItem.propTypes = {
	item: React.PropTypes.object,
	into: React.PropTypes.array
}

export default IntoItem