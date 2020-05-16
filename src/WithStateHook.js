import React, { useState } from 'react'

const FormInputFunc = props => {
  const [input, setInput] = useState('')
                                     
  const handleChange = e => {
    setInput(e.target.value)
  }
  
  return <input type="text" value={input} onChange={handleChange} />
}

export default FormInputFunc