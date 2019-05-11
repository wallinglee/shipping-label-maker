import React from 'react';
import '../../../css/header.css';

/**
 * Header component
 */
const Header = (props) => {
  //console.log('Header - props', props);
  return (
    <div className="header row">
        <div className="col">
          <h1>{props.title}</h1>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              style={{width: props.progress * 100 + '%'}}
              aria-valuenow={props.progress * 100}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
    </div>
  )
};

export default Header;
