const loading = (state = false, action) => {
	switch (action.type) {
		case 'GET_JSON_DATA':
			return true
		case 'GET_PAGES_RECEIVED':
			return false
		case 'GET_PAGES_ERROR':
			return false
		case 'GET_POSTS_RECEIVED':
			return false
		case 'GET_POSTS_ERROR':
			return false
		case 'GET_PROFILES_RECEIVED':
			return false
		case 'GET_PROFILES_ERROR':
			return false
		case 'GET_JOBS_RECEIVED':
			return false
		case 'GET_JOBS_ERROR':
			return false
		default:
			return state
	}
}

export default loading
