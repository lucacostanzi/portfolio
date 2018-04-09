import React from 'react';
import PropTypes from 'prop-types';

export class Project extends React.Component {
  render() {
    return (<div className="columns is-12 is-variable  " style={{ paddingTop: 120 }} >
      {this.props.left &&
      <div className="column is-4  is-offset-1" style={{  }} >
        {this.props.children}
      </div>
      }
      <div className={" column is-6" + (!this.props.left && " is-offset-1")} style={{  }} >
        <figure className="image" ><img alt="" style={{ borderRadius: 5 }} src={this.props.image} /></figure>
      </div>
      {!this.props.left &&
      <div className={"column is-4" + (this.props.left && " is-offset-1")} style={{  }} >
        {this.props.children}
      </div>
      }
    </div>);
  }
}
Project.propTypes = {
  left: PropTypes.bool,
  image: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
