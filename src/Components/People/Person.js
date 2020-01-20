import React from 'react';
import HomeWorld from '../HomeWorld/HomeWorld';
import { Row } from '../UI/Table/Row';

export default function Person({
	name,
	gender,
	profile,
	height,
	homeworld,
	birth_year,
	push
}) {
	const personIdFromProfileUrl = profile.split('people/')[1];
	const personId = personIdFromProfileUrl.substring(
		0,
		personIdFromProfileUrl.length - 1
	);

	const loadPerson = () => {
		push(`/person/${personId}`);
	};

	return (
		<Row onClick={loadPerson} hover>
			<td>{name}</td>
			<td>{gender}</td>
			<td>{parseInt(height) / 100} m</td>
			<td>
				<HomeWorld onlyName link={homeworld} />
			</td>
			<td>{birth_year}</td>
		</Row>
	);
}
