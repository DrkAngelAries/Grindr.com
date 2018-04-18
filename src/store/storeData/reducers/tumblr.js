const posts = (state = [], action) => {
	// console.log('posts')
	switch (action.type) {
		case 'GET_TUMBLR_RECEIVED':
			//console.log('GET_TUMBLR_RECEIVED')
			return action.tumblr
		default:
			return state
	}
}

export default posts
