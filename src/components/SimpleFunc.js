import React from 'react'
import { string } from 'prop-types'

const TitleFunc = props => {
  const { title } = props
  return <h1>{title}</h1>
}

TitleFunc.propTypes = {
  title: string.isRequired
}

export default TitleFunc