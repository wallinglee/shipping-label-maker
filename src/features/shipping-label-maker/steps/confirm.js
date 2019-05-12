import React, { Component } from 'react';
import Buttons from '../../../core/components/buttons/buttons';
import '../../../css/step.css';

export class Confirm extends Component {
  render() {
    const { wizardContext, onAction, currStep } = this.props;
    const from = wizardContext.ShippingInfo.from;
    const to = wizardContext.ShippingInfo.to;
    const weight = wizardContext.ShippingInfo.weight;
    const shippingOption = wizardContext.ShippingInfo.shippingOption;
    const ShippingOption = {ground: 1, priority: 2};
    let optionName = Object.keys(ShippingOption).find(key => ShippingOption[key] === wizardContext.ShippingInfo.shippingOption);
    const shippingRate = 0.40;
    const shipCost = '$' + (weight * shippingRate * (shippingOption === ShippingOption.ground ? 1 : 1.5)).toFixed(2);
    
    return (
      <div className="step row">
        <div className="col">
          <h4>Confirm the shipping info:</h4>
          <div className="confirm-shipping">
            <div className="row">
              <div className="col"><h6>Sender:</h6>{from.name}<br />{from.street}<br />{from.city}, {from.state} {from.zip}</div>
              <div className="col"><h6>Receiver:</h6>{to.name}<br />{to.street}<br />{to.city}, {to.state} {to.zip}</div>
              <div className="col">
                <h6>Weight:</h6>{wizardContext.ShippingInfo.weight + ' lbs.'}
                <h6>Shipping Option:</h6><span className="option-name">{optionName}</span>
                <h6>Shipping Cost:</h6>{shipCost}
              </div>
            </div>
          </div>
          <Buttons onAction={onAction} currStep={currStep} />
        </div>
      </div>
    )
  }
}

export default Confirm
