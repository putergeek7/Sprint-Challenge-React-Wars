import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardLink,
	CardTitle,
	CardSubtitle
} from 'reactstrap';

const StarWarsCard = props => {
	return (
		<div>
			<Card>
				<CardBody>
					<CardTitle className='titleBold'>{props.title}</CardTitle>
					<CardSubtitle className='dateBold'>{props.date}</CardSubtitle>
				</CardBody>
				<img height='600px' width='70%' src={props.url} alt='Card image cap' />
				<CardBody>
					<CardText className='textCenter'>{props.explanation}</CardText>
					<CardText>{props.copyright}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default StarWarsCard;
