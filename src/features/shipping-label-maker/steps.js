import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetSenderAddress from './get-sender-address';
import GetReceiverAddress from './get-receiver-address';
import GetWeight from './get-weight';
import GetShippingOption from './get-shipping-option';
import Confirm from './confirm';
import '../../css/step.css';

export class Steps extends Component {
  render() {
    console.log('Steps - props: ', this.props);
    const { wizardContext, onAction, handleInputChange } = this.props;
    let currStep = this.props.wizardContext.currStep;

    switch (currStep) {
        case 1:
            return (
                <GetSenderAddress
                    values={wizardContext.ShippingInfo.from}
                    onAction={onAction}
                    handleInputChange={handleInputChange}
                />
            );
        case 2:
            return (
                <GetReceiverAddress
                    values={wizardContext.ShippingInfo.to}
                    onAction={onAction}
                    handleInputChange={handleInputChange}
                />
            );
        case 3:
            return (
                <GetWeight
                    values={wizardContext.ShippingInfo.weight}
                    onAction={onAction}
                />
            );
        case 4:
            return (
                <GetShippingOption
                    values={wizardContext.ShippingInfo.shippingOption}
                    onAction={onAction}
                />
            );
        case 5:
            return (
                <Confirm
                    onAction={onAction}
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
