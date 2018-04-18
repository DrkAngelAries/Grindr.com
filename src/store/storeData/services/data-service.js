import axios from 'axios'

const timestamp = Date.now();

let JOB_API = 'https://api.greenhouse.io/v1/boards/grindr/jobs?content=true&count=-1&callback='
let PAGES_API = '/data/pages.json?yass='+timestamp

const dataService = store => next => action => {
	next(action)
	switch (action.type) {
		case 'GET_JSON_DATA':
			function getPages() {
				return axios.get(PAGES_API)
					.then(function (response) {
						const pages = response.data.pages
						next({
							type: 'GET_PAGES_RECEIVED',
							pages
						})
					})
					.catch(function (error) {
						console.log('error', error);
					});
			}

			function getJobs() {
				return axios.get(JOB_API)
					.then(function (response) {
						const jobs = response.data.jobs
						next({
							type: 'GET_JOBS_RECEIVED',
							jobs
						})
					})
					.catch(function (error) {
						console.log('error', error);
					});
			}

			return axios.all([getPages(), getJobs()])
				.then(axios.spread(function (pages, jobs) {
					action._this.setState({
						loaded: true
					})
				}));
			break
		default:
			break
	}

};

export default dataService
