import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListItem({ dataLink }) {
	const link = dataLink.split('api')[2];
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});

	useEffect(() => {
		axios
			.get(`https://swapi.co/api${link}`)
			.then(response => {
				setLoading(false);
				setData(response.data);
			})
			.catch(err => {
				setLoading(false);
				console.log('I messed up', err, err.message);
			});
	}, [link]);

	return <li>{loading ? 'loading' : data.title ? data.title : data.name}</li>;
}
