import React, { Component } from 'react';
import '../../css/step.css';

export class GetReceiverAddress extends Component {
  render() {
    console.log('GetReceiverAddress - props: ', this.props);
    const { values, onAction, handleInputChange } = this.props;
    const marker = 'to';
    
    return (
      <div className="step row">
        <div className="col">
          <h3>Enter the receiver's address:</h3>
          <form>
            <div className="form-group row">
              <label htmlFor="receivername" className="col-sm-1 col-form-label text-right">Name:</label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="receivername"
                  value={values.name}
                  onChange={(e) => handleInputChange(marker, 'name', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="receiverstreet" className="col-sm-1 col-form-label text-right">Street:</label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="receiverstreet"
                  value={values.street}
                  onChange={(e) => handleInputChange(marker, 'street', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="receivercity" className="col-sm-1 col-form-label text-right">City:</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="receivercity"
                  value={values.city}
                  onChange={(e) => handleInputChange(marker, 'city', e.target.value)}
                />
              </div>
              <label htmlFor="receiverstate" className="col-sm-1 col-form-label text-right">State:</label>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  id="receiverstate"
                  value={values.state}
                  onChange={(e) => handleInputChange(marker, 'state', e.target.value)}
                />
              </div>
              <label htmlFor="receiverzip" className="col-sm-1 col-form-label text-right">Zip:</label>
              <div className="col-sm-3">
              <input
                  type="text"
                  className="form-control"
                  id="receiverzip"
                  value={values.zip}
                  onChange={(e) => handleInputChange(marker, 'zip', e.target.value)}
                />
              </div>
            </div>
          </form>
          <button onClick={()=>{onAction('prev')}}>Back</button>
          <button onClick={()=>{onAction('next')}}>Next</button>
        </div>
      </div>
    )
  }
}

export default GetReceiverAddress
