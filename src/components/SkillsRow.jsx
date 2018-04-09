/**
 * Created by luca on 6/03/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';

const SkillsRow = function (props) {
  return (
    <div className="columns  " >
      {props.children}
    </div>
  );
};

SkillsRow.propTypes = {
  children: PropTypes.node,
}

SkillsRow.defaultProps = {
  children: '',
}

export default SkillsRow;
