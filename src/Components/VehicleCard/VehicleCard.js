import React from 'react';

import { Card } from '../UI/Card/Card';
import { List } from '../UI/List/List';
import ListItem from '../ListItem/ListItem';

export default function VehicleCard({ vehicleLinks }) {
	return (
		<Card>
			<h3>Vehicles</h3>

			<List>
				{vehicleLinks.map(vehicleLink => (
					<ListItem key={vehicleLink} dataLink={vehicleLink} />
				))}
			</List>
		</Card>
	);
}
