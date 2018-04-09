import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import SkillCard from './SkillCard';
import SkillsFilter from './SkillsFilter';
import SkillsOrder from './SkillsOrder';

class SkillsList extends React.Component {
  getCategories() {
    return this.props.skillCards
      .map(card => card.get('type'))
      .filter((elem, index, self) => index === self.indexOf(elem));
  }

  getVisibleCards() {
    return this.props.skillCards.filter(card => card.get('visible'));
  }

  render() {
    const types = this.getCategories();
    const cardsList = this.getVisibleCards();
    const style = { minWidth: "30%" };
    return (
      <div style={{marginBottom: 50, marginTop: 50}}>
        <div className="columns is-multiline" >
          <div className="column is-1 is-offset-11" >
            <SkillsOrder
              handleOrderOnChange={this.props.handleOrderOnChange}
              handleDirectionOnChange={this.props.handleDirectionOnChange} />
          </div>
          <div className="column is-one-fifth" >
            <SkillsFilter
              types={types}
              handleFilterOnChange={this.props.handleFilterOnChange}
              handleOrderOnChange={this.props.handleOrderOnChange}
              handleDirectionOnChange={this.props.handleDirectionOnChange}
              filters={this.props.filters}
            />
          </div>
          <div className="column is-four-fifths" >
            <div className="columns is-multiline" >
              {cardsList.map((card, id) => (
                <div
                  className={id + 1 !== cardsList.size ? ['column', ''].join(' ') : 'column'}
                  key={card.get('id')}
                  style={style}
                >
                  <SkillCard
                    card={card}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

SkillsList.propTypes = {
  skillCards: PropTypes.instanceOf(List).isRequired,
  filters: PropTypes.instanceOf(List).isRequired,
  handleFilterOnChange: PropTypes.func.isRequired,
  handleOrderOnChange: PropTypes.func.isRequired,
  handleDirectionOnChange: PropTypes.func.isRequired,
  cardsPerLine: PropTypes.number.isRequired,
};

export default SkillsList;
