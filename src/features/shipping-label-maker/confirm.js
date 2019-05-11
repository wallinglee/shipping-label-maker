import React, { Component } from 'react';
import '../../css/step.css';

export class Confirm extends Component {
  render() {
    console.log('Confirm - props: ', this.props);
    const { values, onAction } = this.props;
    
    return (
      <div className="step row">
        <div className="col">
          <h3>Confirm the shipping info:</h3>
          <button onClick={()=>{onAction('prev')}}>Back</button>
          <button onClick={()=>{onAction('end')}}>End</button>
        </div>
      </div>
    )
  }
}

export default Confirm
