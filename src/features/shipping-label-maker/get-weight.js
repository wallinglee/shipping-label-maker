import React, { Component } from 'react';
import '../../css/step.css';

export class GetWeight extends Component {
  render() {
    console.log('GetWeight - props: ', this.props);
    const { values, onAction } = this.props;
    
    return (
      <div className="step row">
        <div className="col">
          <h3>Enter the package weight:</h3>
          <button onClick={()=>{onAction('prev')}}>Back</button>
          <button onClick={()=>{onAction('next')}}>Next</button>
        </div>
      </div>
    )
  }
}

export default GetWeight
