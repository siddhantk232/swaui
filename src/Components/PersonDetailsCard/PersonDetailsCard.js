import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardWrapper } from '../UI/CardWrapper/CardWrapper';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import FilmCard from '../FilmCard/FilmCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import StarShipCard from '../StarshipCard/StarshipCard';

export default function PersonDetailsCard({
	match: {
		params: { id }
	}
}) {
	const [loading, setLoading] = useState(true);
	const [person, setPerson] = useState({});

	useEffect(() => {
		axios
			.get(`https://swapi.co/api/people/${id}`)
			.then(response => {
				setLoading(false);
				setPerson(response.data);
			})
			.catch(err => {
				setLoading(false);
				console.log('I messed up', err, err.message);
			});
	}, [id]);

	if (loading) return <h1 style={{ color: '#fff' }}>Loading...</h1>;

	return (
		<CardWrapper>
			<PersonalDetails
				name={person.name}
				skin_color={person.skin_color}
				eye_color={person.eye_color}
				mass={person.mass}
			/>

			{person.films ? <FilmCard filmLinks={person.films} /> : null}

			{person.vehicles && person.vehicles.length > 0 ? (
				<VehicleCard vehicleLinks={person.vehicles} />
			) : null}
			{person.starships && person.starships.length > 0 ? (
				<StarShipCard starshipLinks={person.starships} />
			) : null}
		</CardWrapper>
	);
}
