import React from 'react';

import { Card } from '../UI/Card/Card';
import { List } from '../UI/List/List';
import ListItem from '../ListItem/ListItem';

export default function StarShipCard({ starshipLinks }) {
	return (
		<Card>
			<h3>Starships</h3>

			<List>
				{starshipLinks.map(starshipLink => (
					<ListItem key={starshipLink} dataLink={starshipLink} />
				))}
			</List>
		</Card>
	);
}
