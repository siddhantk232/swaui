import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomeWorld({ onlyName, link }) {
	const [loading, setLoading] = useState(true);
	const [planet, setPlanet] = useState({});

	useEffect(() => {
		console.log(link);
		axios
			.get(link)
			.then(response => {
				setLoading(false);
				setPlanet(response.data);
			})
			.catch(err => {
				setLoading(false);
				console.log('I messed up', err, err.message);
			});
	}, [link]);

	if (onlyName) {
		return loading ? 'fetching' : planet.name || null;
	}

	return <h1>later add card here</h1>;
}
