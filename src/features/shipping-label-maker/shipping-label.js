import React, { Component } from 'react';
import '../../css/shipping-label.css';

export class ShippingLabel extends Component {
  render() {
    const { wizardContext } = this.props;
    const from = wizardContext.from;
    const to = wizardContext.to;
    return (
      <div className="shipping-label">
        <div className="from">
          {from.name}<br />{from.street}<br />{from.city}, {from.state} {from.zip}
        </div>
        <div className="to">
          <div className="inner">
            {to.name}<br />{to.street}<br />{to.city}, {to.state} {to.zip}
          </div>
        </div>
      </div>
    )
  }
}

export default ShippingLabel
