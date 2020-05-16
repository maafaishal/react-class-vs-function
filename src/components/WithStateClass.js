import React, { Component } from 'react'

class FormInputClass extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      input: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }
  
  render() {
    const { input } = this.props
    return <input type="text" value={input} onChange={this.handleChange} placeholder="Type anything text" />
  }
}

export default FormInputClass