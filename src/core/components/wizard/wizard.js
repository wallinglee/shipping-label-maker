import React, { Component } from 'react';
import GetSenderAddress from '../../../features/shipping-label-maker/get-sender-address';
import GetReceiverAddress from '../../../features/shipping-label-maker/get-receiver-address';
import GetWeight from '../../../features/shipping-label-maker/get-weight';
import GetShippingOption from '../../../features/shipping-label-maker/get-shipping-option';
import Confirm from '../../../features/shipping-label-maker/confirm';

export class Wizard extends Component {
    render() {
        const { wizardContext, goforward, goback } = this.props;
        console.log('Wizard - render - wizardContext: ', wizardContext);
    
        switch (wizardContext.currStep) {
          case 1:
            return (
              <GetSenderAddress
                goforward={goforward}
                goback={goback}
              />
            );
          case 2:
            return (
              <GetReceiverAddress
                goforward={goforward}
                goback={goback}
              />
            );
          case 3:
            return (
              <GetWeight
                goforward={goforward}
                goback={goback}
              />
            );
          case 4:
            return (
              <GetShippingOption
                goforward={goforward}
                goback={goback}
              />
            );
          case 5:
            return (
              <Confirm
                goforward={goforward}
                goback={goback}
              />
            );
          default:
            return null
        }
      }
}

export default Wizard;