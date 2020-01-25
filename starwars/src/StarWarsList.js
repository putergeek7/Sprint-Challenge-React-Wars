import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

function StarWarsList() {
	const [profileInfo, setProfileInfo] = useState([]);

	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then(res => {
				console.log(res.data);
				setProfileInfo(res.data.results);
			})
			.catch(err => {
				console.log('Error: ', err);
			});
	}, []);

	return (
		<div className='completeCard'>
			{profileInfo.map(profile => {
				return (
					<StarWarsCard
						name={profile.name}
						birthYear={profile.birth_year}
						gender={profile.gender}
						height={profile.height}
						weight={profile.weight}
						hairColor={profile.hair_color}
						eyeColor={profile.eye_color}
						home_world={profile.homeworld}
					/>
				);
			})}
		</div>
	);
}

export default StarWarsList;
