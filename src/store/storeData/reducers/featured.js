const featured = (state = [], action) => {
	switch (action.type) {
		case 'GET_FEATURED_RECEIVED':
			return action.featured
		default:
			return state
	}
}

export default featured
