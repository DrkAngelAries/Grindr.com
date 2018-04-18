const favorites = (state = [], action) => {
	switch (action.type) {
		case 'GET_FAVORITES_RECEIVED':
			return action.favorites
		default:
			return state
	}
}

export default favorites
