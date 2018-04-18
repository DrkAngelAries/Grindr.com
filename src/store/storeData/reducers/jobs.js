const jobs = (state = [], action) => {
	// console.log('posts')
	switch (action.type) {
		case 'GET_JOBS_RECEIVED':
			//console.log('GET_JOBS_RECEIVED')
			return action.jobs
		default:
			return state
	}
}

export default jobs
