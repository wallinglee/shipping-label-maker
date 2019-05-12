import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetSenderAddress from './steps/get-sender-address';
import GetReceiverAddress from './steps/get-receiver-address';
import GetWeight from './steps/get-weight';
import GetShippingOption from './steps/get-shipping-option';
import Confirm from './steps/confirm';
import '../../css/step.css';

export class Steps extends Component {
  render() {
    const { wizardContext, onAction, handleInputChange } = this.props;
    let currStep = wizardContext.currStep;

    switch (currStep) {
        case 1:
            return (
                <GetSenderAddress
                    values={wizardContext.ShippingInfo.from}
                    onAction={onAction}
                    handleInputChange={handleInputChange}
                    currStep={currStep}
                />
            );
        case 2:
            return (
                <GetReceiverAddress
                    values={wizardContext.ShippingInfo.to}
                    onAction={onAction}
                    handleInputChange={handleInputChange}
                    currStep={currStep}
                />
            );
        case 3:
            return (
                <GetWeight
                    values={wizardContext.ShippingInfo.weight}
                    onAction={onAction}
                    handleInputChange={handleInputChange}
                    currStep={currStep}
                />
            );
        case 4:
            return (
                <GetShippingOption
                    shippingOption={wizardContext.ShippingInfo.shippingOption}
                    weight={wizardContext.ShippingInfo.weight}
                    onAction={onAction}
                    handleInputChange={handleInputChange}
                    currStep={currStep}
                />
            );
        case 5:
            return (
                <Confirm
                    wizardContext={wizardContext}
                    onAction={onAction}
                    currStep={currStep}
                />
            );
        default:
            return null
    }
  }
}

Steps.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired
};

export default Steps
