import axios from 'axios';

export function fetchPeople(setPeople, setLoading) {
	setLoading(true);
	console.log('loading');
	axios
		.get('/people')
		.then(response => {
			console.log('loaded');
			setLoading(false);
			setPeople(response.data.results);
		})
		.catch(err => {
			setLoading(false);
			console.log('loaded');
			console.log('I messed up', err, err.message);
		});
}
