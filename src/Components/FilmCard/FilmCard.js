import React from 'react';

import { Card } from '../UI/Card/Card';
import { List } from '../UI/List/List';
import ListItem from '../ListItem/ListItem';

export default function FilmCard({ filmLinks }) {
	return (
		<Card>
			<h3>Featured Films</h3>

			<List>
				{filmLinks.map(filmLink => (
					<ListItem key={filmLink} dataLink={filmLink} />
				))}
			</List>
		</Card>
	);
}
