import React from 'react';
import { List, Map } from 'immutable';
import { PropTypes } from 'prop-types';
import { helpers } from '../services/helpers';
import SkillsList from '../components/SkillsList';

class SkillsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillCardsList: List([]),
      orderBy: 'rating',
      filters: List([]),
      direction: false,
    };
    this.handleFilterOnChange = this.handleFilterOnChange.bind(this);
    this.handleOrderOnChange = this.handleOrderOnChange.bind(this);
    this.handleDirectionOnChange = this.handleDirectionOnChange.bind(this);
  }

  componentDidMount() {
    const promiseObj = helpers.getData();
    const component = this;
    promiseObj.then((data) => {
      component.setState(({ skillCardsList }) => ({
        skillCardsList: List(data.skills)
          .sort((a, b) => {
            if (a[component.state.orderBy] < b[component.state.orderBy]) {
              return 1;
            }
            if (a[component.state.orderBy] > b[component.state.orderBy]) {
              return -1;
            }
            return 0
          })
          .map(skill =>
            Map(Object.assign({}, skill, {
              visible: true,
            }))),
      }));
    });
  }

  getUpdatedFilters(toUpdateFilter) {
    return this.state.filters.includes(toUpdateFilter)
      ? this.state.filters.filter(f => f !== toUpdateFilter)
      : this.state.filters.push(toUpdateFilter);
  }

  handleFilterOnChange(e) {
    const updatedFilters = this.getUpdatedFilters(e.target.dataset.tag);
    const newSkills = this.state.skillCardsList.map(skill => skill.set('visible', !updatedFilters.count()
      ? true
      : updatedFilters.includes(skill.get('type'))));
    this.setState(() => ({
      skillCardsList: newSkills,
      filters: updatedFilters,
    }));
  }

  handleOrderOnChange(e) {
    this.sortSkills(e.target.value, this.state.direction);
  }

  sortSkills(orderBy, direction) {
    const orderedSkills = this.state.skillCardsList.sort((a, b) => {
      if (direction === true) {
        if (a.get(orderBy) < b.get(orderBy)) {
          return -1;
        }
        if (a.get(orderBy) > b.get(orderBy)) {
          return 1;
        }
        return 0
      }
      if (a.get(orderBy) > b.get(orderBy)) {
        return -1;
      }
      if (a.get(orderBy) < b.get(orderBy)) {
        return 1;
      }
      return 0
    });
    this.setState({
      skillCardsList: orderedSkills,
      direction,
      orderBy,
    });
  }

  handleDirectionOnChange(e) {
    e.target.innerHTML = this.state.direction ? '&#8593;' : '&#8595;';
    this.sortSkills(this.state.orderBy, !this.state.direction);
  }

  render() {
    return (
      <SkillsList
        skillCards={this.state.skillCardsList}
        cardsPerLine={this.props.cardsPerLine}
        filters={this.state.filters}
        handleFilterOnChange={this.handleFilterOnChange}
        handleOrderOnChange={this.handleOrderOnChange}
        handleDirectionOnChange={this.handleDirectionOnChange}
      />
    );
  }
}

SkillsListContainer.propTypes = {
  cardsPerLine: PropTypes.number.isRequired,
}

export default SkillsListContainer;
