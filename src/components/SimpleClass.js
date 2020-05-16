import React, { PureComponent } from 'react'
import { string } from 'prop-types'

class TitleClass extends PureComponent {
  render() {
    const { title } = this.props
    return <h1>{title}</h1>
  }
}

TitleClass.propTypes = {
  title: string.isRequired
}

export default TitleClass