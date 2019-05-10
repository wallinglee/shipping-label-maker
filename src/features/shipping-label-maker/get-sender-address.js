import React, { Component } from 'react';
import '../../css/step.css';

export class GetSenderAddress extends Component {
  render() {
    //console.log('props: ', this.props);
    return (
      <div className="step row">
        <div className="col">
          <h3>Enter the sender's address:</h3>
          <button onClick={this.props.goforward}>Next</button>
        </div>
      </div>
    )
  }
}

export default GetSenderAddress
