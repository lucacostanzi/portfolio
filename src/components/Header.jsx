import React from 'react';
import { Hero, Container, Title, SubTitle } from 'reactbulma';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div >
      <Hero className={props.color} medium={props.medium} >
        <Hero.Body>
          <Container className="has-text-centered" >
            <Title className={props.medium && 'color-deepsky'}>{props.title}</Title>
            <SubTitle>{props.subtitle}</SubTitle>
            {props.children && <div style={{ marginTop: 60, marginBottom: -60 }} >{props.children}</div>}
          </Container>
        </Hero.Body>
      </Hero>
    </div>
  );
}

Header.defaultProps = {
  medium: false,
  children: ''
};

Header.propTypes = {
  color: PropTypes.string.isRequired,
  medium: PropTypes.bool,
  children: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Header;
