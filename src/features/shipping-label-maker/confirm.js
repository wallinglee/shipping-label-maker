import React, { Component } from 'react';
import '../../css/step.css';

export class Confirm extends Component {
  render() {
    //console.log('props: ', this.props);
    return (
      <div className="step row">
        <div className="col">
          <h3>Confirm the shipping info:</h3>
          <button onClick={this.props.goback}>Back</button>
          <button onClick={this.props.goforward}>Next</button>
        </div>
      </div>
    )
  }
}

export default Confirm
