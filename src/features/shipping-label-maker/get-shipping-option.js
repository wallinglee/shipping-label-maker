import React, { Component } from 'react';
import '../../css/step.css';

export class GetShippingOption extends Component {
  render() {
    console.log('GetShippingOption - props: ', this.props);
    const { values, onAction } = this.props;
    
    return (
      <div className="step row">
        <div className="col">
          <h3>Select the shipping option:</h3>
          <button onClick={()=>{onAction('prev')}}>Back</button>
          <button onClick={()=>{onAction('next')}}>Next</button>
        </div>
      </div>
    )
  }
}

export default GetShippingOption
