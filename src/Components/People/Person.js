import React from 'react';

export default function Person({
	name,
	gender,
	height,
	homeworld,
	birth_year
}) {
	return (
		<tr>
			<td>{name}</td>
			<td>{gender}</td>
			<td>{parseInt(height) / 100} m</td>
			<td>{homeworld}</td>
			<td>{birth_year}</td>
		</tr>
	);
}
