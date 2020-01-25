import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const StarWarsCard = props => {
	return (
		<div>
			<Card
				body
				inverse
				style={{ backgroundColor: 'transparent', borderColor: 'black' }}
				className='card'
			>
				<CardBody>
					<CardTitle>Name: {props.name}</CardTitle>
					<CardText>Birth Year: {props.birth_year}</CardText>
					<CardText>Gender: {props.gender}</CardText>
					<CardText>Height: {props.height}</CardText>
					<CardText>Weight: {props.weight}</CardText>
					<CardText>Hair Color: {props.hair_color}</CardText>
					<CardText>Eye Color: {props.eye_color}</CardText>
					<CardText>Home World: {props.homeWorld}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};
export default StarWarsCard;
