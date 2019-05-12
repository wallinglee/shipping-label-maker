import React, { Component } from 'react';
import Buttons from '../../../core/components/buttons/buttons';
import '../../../css/step.css';

export class GetShippingOption extends Component {
  render() {
    const { shippingOption, onAction, handleInputChange, weight, currStep } = this.props;
    const ShippingOption = {ground: 1, priority: 2};
    const shippingRate = 0.40;
    const shipCost = '$' + (weight * shippingRate * (shippingOption === ShippingOption.ground ? 1 : 1.5)).toFixed(2);

    return (
      <div className="step row">
        <div className="col">
          <h4>Select the shipping option:</h4>
          <div className="form-check">
            {Object.keys(ShippingOption).map((key) => {
              return <div key={key}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="shippingoption"
                  id={'shippingoption' + ShippingOption[key]}
                  value={ShippingOption[key]}
                  checked={shippingOption===ShippingOption[key]}
                  onChange={(e) => handleInputChange(null, 'shippingOption', e.target.value)}
                />
                <label className="form-check-label" htmlFor={'shippingoption' + ShippingOption[key]}>{key}</label>
              </div>;
            })}

            <div className="shipping-cost">
              <h6>Shipping cost ({weight} lbs.)</h6>
              Cost: {shipCost}
            </div>
          </div>
          <Buttons onAction={onAction} currStep={currStep} />
        </div>
      </div>
    )
  }
}

export default GetShippingOption
