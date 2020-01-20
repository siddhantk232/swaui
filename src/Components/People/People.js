import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Table } from '../UI/Table/Table';
import Person from './Person';
import Pagination from '../Pagination/Pagination';

export default function People({ history: { push } }) {
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currPage, setCurrPage] = useState(1);

	useEffect(() => {
		fetchPeople(setPeople, setLoading, currPage);
	}, [currPage]);

	if (loading) return <h1 style={{ color: '#fff' }}>Loading...</h1>;

	return (
		<>
			<Table>
				<thead>
					<tr style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
						<th>Name</th>
						<th>Gender</th>
						<th>Height</th>
						<th>Home World</th>
						<th>Birth Year</th>
					</tr>
				</thead>

				<tbody>
					{people &&
						people.map(
							({ name, homeworld, birth_year, gender, height, url }) => (
								<Person
									name={name}
									homeworld={homeworld}
									birth_year={birth_year}
									gender={gender}
									height={height}
									push={push}
									profile={url}
									key={name}
								/>
							)
						)}
				</tbody>
			</Table>

			<Pagination currentPage={currPage} setCurrentPage={setCurrPage} />
		</>
	);
}

function fetchPeople(setPeople, setLoading, currPage) {
	setLoading(true);
	console.log('loading');
	axios
		.get('/people', {
			params: {
				page: currPage
			}
		})
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
