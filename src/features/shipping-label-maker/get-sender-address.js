import React, { Component } from 'react';
import '../../css/step.css';

export class GetSenderAddress extends Component {
  render() {
    console.log('GetSenderAddress - props: ', this.props);
    const { values, onAction, handleInputChange } = this.props;
    const marker = 'from';
    
    return (
      <div className="step row">
        <div className="col">
          <h3>Enter the sender's address:</h3>
          <form>
            <div className="form-group row">
              <label htmlFor="sendername" className="col-sm-1 col-form-label text-right">Name:</label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="sendername"
                  value={values.name}
                  onChange={(e) => handleInputChange(marker, 'name', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="senderstreet" className="col-sm-1 col-form-label text-right">Street:</label>
              <div className="col-sm-11">
                <input
                  type="text"
                  className="form-control"
                  id="senderstreet"
                  value={values.street}
                  onChange={(e) => handleInputChange(marker, 'street', e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="sendercity" className="col-sm-1 col-form-label text-right">City:</label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="sendercity"
                  value={values.city}
                  onChange={(e) => handleInputChange(marker, 'city', e.target.value)}
                />
              </div>
              <label htmlFor="senderstate" className="col-sm-1 col-form-label text-right">State:</label>
              <div className="col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  id="senderstate"
                  value={values.state}
                  onChange={(e) => handleInputChange(marker, 'state', e.target.value)}
                />
              </div>
              <label htmlFor="senderzip" className="col-sm-1 col-form-label text-right">Zip:</label>
              <div className="col-sm-3">
              <input
                  type="text"
                  className="form-control"
                  id="senderzip"
                  value={values.zip}
                  onChange={(e) => handleInputChange(marker, 'zip', e.target.value)}
                />
              </div>
            </div>
          </form>
          <button onClick={()=>{onAction('next')}}>Next</button>
        </div>
      </div>
    )
  }
}

export default GetSenderAddress
