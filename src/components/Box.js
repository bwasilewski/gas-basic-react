import React, { Component } from 'react'

class Box extends Component {
    render() {
      return(
        <div className="box">
          <h2>{this.props.headline}</h2>
          <p>{this.props.textcontent}</p>
        </div>
      )
    }
  }

  export default Box