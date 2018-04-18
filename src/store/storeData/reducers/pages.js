const pages = (state = [], action) => {
	// console.log('posts')
	switch (action.type) {
		case 'GET_PAGES_RECEIVED':
			//console.log('GET_PAGES_RECEIVED')
			return action.pages
		default:
			return state
	}
}

export default pages
