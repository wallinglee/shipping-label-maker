import React, { Component } from 'react'

export class GetReceiverAddress extends Component {
  render() {
    //console.log('props: ', this.props);
    return (
      <div>
        <h2>GetReceiverAddress</h2>
        <button onClick={this.props.goback}>Back</button>
        <button onClick={this.props.goforward}>Next</button>
      </div>
    )
  }
}

export default GetReceiverAddress
