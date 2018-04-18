const profiles = (state = [], action) => {
	// console.log('profiles')
	switch (action.type) {
		case 'GET_PROFILES_RECEIVED':
			//console.log('GET_PROFILES_RECEIVED')
			return action.profiles
		default:
			return state
	}
}

export default profiles
