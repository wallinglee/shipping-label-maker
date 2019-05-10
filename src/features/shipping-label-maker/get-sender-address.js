import React, { Component } from 'react'

export class GetSenderAddress extends Component {
  render() {
    //console.log('props: ', this.props);
    return (
      <div>
        <h2>GetSenderAddress</h2>
        <button onClick={this.props.goforward}>Next</button>
      </div>
    )
  }
}

export default GetSenderAddress
