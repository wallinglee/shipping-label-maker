import React, { Component } from 'react';
import Header from '../../core/components/header/header';
import Wizard from '../../core/components/wizard/wizard';
import ShippingLabel from './shipping-label';

export class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currStep: 1,
      ShippingInfo: {
        from: {
          name: '',
          street: '',
          city: '',
          state: '',
          zip: ''
        },
        to: {
          name: '',
          street: '',
          city: '',
          state: '',
          zip: ''
        },
        weight: 0,
        shippingOption: 1
      },
      steps: ['GetSenderAddress', 'GetReceiverAddress', 'GetWeight', 'GetShippingOption', 'Confirm'],
      isComplete: false
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

  // Update state from user input
  handleInputChange = (marker, property, val) => {
    let ShippingInfo = {...this.state.ShippingInfo};
    if(marker) {
      ShippingInfo[marker][property] = val;
    } else {
      ShippingInfo[property] = Number(val);
    }
    
    this.setState({ShippingInfo});
  };

  // Header function
  header = () => {
    return <Header title="Shipping Label Maker" progress={this.state.currStep / this.state.steps.length} />;
  };

  // Executes when shipping label is ready
  onComplete = () => {
    this.setState({isComplete: true});
  };
  
  render() {
    return (
      <React.Fragment>
        {this.state.isComplete ? (
          <ShippingLabel wizardContext={this.state.ShippingInfo} />
        ) : (
          <Wizard
            header={this.header}
            steps={this.state.steps}
            wizardContext={this.state}
            onComplete={this.onComplete}
            goforward={this.goForward}
            goback={this.goBack}
            handleInputChange={this.handleInputChange}
          />
        )}
      </React.Fragment>
    )
  }
}

export default ShippingLabelMaker
