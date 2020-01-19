import React, { useState, useEffect } from 'react';
import { Table } from '../UI/Row/Row';
import Person from './Person';
import { fetchPeople } from '../../functions/functions';

export default function People() {
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchPeople(setPeople, setLoading);
	}, []);

	return (
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

			{loading ? (
				<h1>loading</h1>
			) : (
				<tbody>
					{people.map(({ name, homeworld, birth_year, gender, height }) => (
						<Person
							name={name}
							homeworld={homeworld}
							birth_year={birth_year}
							gender={gender}
							height={height}
							key={name}
						/>
					))}
				</tbody>
			)}
		</Table>
	);
}
