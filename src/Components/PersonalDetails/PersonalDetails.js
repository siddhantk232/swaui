import React from 'react';
import { Card } from '../UI/Card/Card';
import { Table } from '../UI/Table/Table';
import { Row } from '../UI/Table/Row';

export default function PersonalDetails({ name, mass, eye_color, skin_color }) {
	return (
		<Card>
			<h3>Personal Details</h3>

			<Table>
				<tbody>
					<Row>
						<td style={{ color: 'rgb(253, 195, 0)' }}>Name: </td>
						<td>{name}</td>
					</Row>
					<Row>
						<td style={{ color: 'rgb(253, 195, 0)' }}>Mass: </td>
						<td>{mass}</td>
					</Row>
					<Row>
						<td style={{ color: 'rgb(253, 195, 0)' }}>Skin Color: </td>
						<td>{skin_color}</td>
					</Row>
					<Row>
						<td style={{ color: 'rgb(253, 195, 0)' }}>Eye Color: </td>
						<td>{eye_color}</td>
					</Row>
				</tbody>
			</Table>
		</Card>
	);
}
