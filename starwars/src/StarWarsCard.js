import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const StarWarsCard = props => {
	return (
		<div>
			<Card
				body
				inverse
				style={{ backgroundColor: 'black', borderColor: 'white' }}
				className='card'
			>
				<CardBody>
					<CardTitle>Name: {props.name}</CardTitle>
					<CardText>Gender: {props.gender}</CardText>
					<CardText>Height: {props.height}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};
export default StarWarsCard;
