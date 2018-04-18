import React from 'react'

let tagstyle = ''
export const Tags = (props) => (
	<div className="tag-box">
		{props.tags.map(function(a, i){
			if(i % 2 == 0){
		       tagstyle = "blk";
		    }else{
		       tagstyle = "wht";
	        }
			return (
				<span id={a.id} key={a.id} className={'tag '+tagstyle}>{a.title}</span>
			)
		})}
	</div>
)

Tags.propTypes = {
  tags: React.PropTypes.array
}

export default Tags