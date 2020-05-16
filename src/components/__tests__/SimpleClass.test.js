import React from 'react'
import { render, getByText } from '@testing-library/react'

import SimpleClass from '../SimpleClass'

describe('SimpleClass', () => {
  it('renders properly', () => {
    const title = 'My Experiment about React Class component vs Function Component'

    const { container  } = render(<SimpleClass title={title} />)

    expect(getByText(container, title)).toBeInTheDocument()
  })
})