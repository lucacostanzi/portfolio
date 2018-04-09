import React from 'react';
import { Card, Media, Image, Content, Title, SubTitle } from 'reactbulma';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

const SkillCard = function (props) {
  const cardStyle = {
    fontSize: '0.8em',
    height: '100%',
  };
  const contentStyle = {
    textAlign: 'justified',
  };
  const imageStyle = {
    borderRadius: '6',
    height: '100%',
  };
  return (
    <Card style={cardStyle}>
      <Card.Content>
        <Media>
          <Media.Left>
            <Image
              style={imageStyle}
              is="48x48"
              src={props.card.get('imgsrc')}
              alt="Image"
              className="is-rounded"
            />
          </Media.Left>
          <Media.Content>
            <Title is="4">{props.card.get('title')}</Title>
            <SubTitle is="6">
              {props.card.get('type')}
              <br />
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={props.card.get('rating')}
              />
            </SubTitle>
          </Media.Content>
        </Media>
        <Content style={contentStyle}>{props.card.get('content')}</Content>
      </Card.Content>
    </Card>
  );
}

SkillCard.propTypes = {
  card: PropTypes.instanceOf(Map).isRequired,
};

export default SkillCard;
