import React from 'react';
import PropTypes from 'prop-types';

const SkillsOrder = function (props) {
  return (
    <div onChange={props.handleOrderOnChange} className="field has-addons has-addons-right" >
      <div className="control" >
        <div className="select " >
          <select>
            <option value="rating" > Rating</option>
            <option value="title" > Name</option>
            <option value="type" > Category</option>
          </select>
        </div>
      </div>
      <p className="control" >
        <button
          onClick={props.handleDirectionOnChange}
          className="button"
          data-dir={false} >
          &#8593;
        </button>
      </p>
    </div>
  );
}

export default SkillsOrder;

SkillsOrder.propTypes = {
  handleOrderOnChange: PropTypes.func.isRequired,
  handleDirectionOnChange: PropTypes.func.isRequired,
}

