import React, { Component } from 'react'

class Page extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Page