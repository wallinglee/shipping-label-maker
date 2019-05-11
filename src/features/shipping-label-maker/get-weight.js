import React, { Component } from 'react';
import Buttons from '../../core/components/buttons/buttons';
import '../../css/step.css';

export class GetWeight extends Component {
  render() {
    const { values, onAction, handleInputChange, currStep } = this.props;
    
    return (
      <div className="step row">
        <div className="col">
          <h4>Enter the package weight:</h4>
          <form>
            <div className="form-group row">
              <label htmlFor="pkgweight" className="col-sm-1 col-form-label text-right">Weight:</label>
              <div className="col-sm-1">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  id="pkgweight"
                  value={values}
                  onChange={(e) => handleInputChange(null, 'weight', e.target.value)}
                />
              </div>
              <label htmlFor="pkgweight" className="col-sm-1 col-form-label text-left">lbs.</label>
            </div>
          </form>
          <Buttons onAction={onAction} currStep={currStep} />
        </div>
      </div>
    )
  }
}

export default GetWeight
