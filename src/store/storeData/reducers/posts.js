const posts = (state = [], action) => {
	// console.log('posts')
	switch (action.type) {
		case 'GET_POSTS_RECEIVED':
			//console.log('GET_POSTS_RECEIVED')
			return action.posts
		default:
			return state
	}
}

export default posts
