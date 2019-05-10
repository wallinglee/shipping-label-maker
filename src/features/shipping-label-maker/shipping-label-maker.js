import React, { Component } from 'react';
import Wizard from '../../core/components/wizard/wizard';

export class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currStep: 1
    }
  }

  // Go to the next step
  goForward = () => {
    this.setState({currStep: this.state.currStep + 1});
  };

  // Go to the previous step
  goBack = () => {
    this.setState({currStep: this.state.currStep - 1});
  };
  
  render() {
    return (
      <Wizard
        wizardContext={this.state}
        goforward={this.goForward}
        goback={this.goBack}
      />
    )
  }
}

export default ShippingLabelMaker
