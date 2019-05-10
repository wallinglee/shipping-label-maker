import React, { Component } from 'react';
import Header from '../../core/components/header/header';
import Wizard from '../../core/components/wizard/wizard';

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
        weight: null,
        shippingOption: null
      }
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
      <React.Fragment>
        <Header />
        <Wizard
          wizardContext={this.state}
          goforward={this.goForward}
          goback={this.goBack}
        />
      </React.Fragment>
    )
  }
}

export default ShippingLabelMaker
