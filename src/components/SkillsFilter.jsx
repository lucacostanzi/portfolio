import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const SkillsFilter = function (props) {
  return (
    <aside className="menu" >
      <p className="menu-label" >
        Filters
      </p>
      <ul className="menu-list" >
        {props.types.sort((a, b) => a.toLowerCase() > b.toLowerCase()).map((type, id) => (
          <li key={id - 1} >
            <a onClick={props.handleFilterOnChange} data-tag={type}
               className={props.filters.includes(type) ? 'is-active' : ''} >
              {type}{' '}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SkillsFilter;

SkillsFilter.propTypes = {
  types: PropTypes.instanceOf(List).isRequired,
  filters: PropTypes.instanceOf(List).isRequired,
  handleFilterOnChange: PropTypes.func.isRequired,
}

