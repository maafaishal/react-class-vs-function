import React from 'react'
import { render, getByText } from '@testing-library/react'

import SimpleFunc from '../SimpleFunc'

describe('SimpleFunc', () => {
  it('renders properly', () => {
    const title = 'My Experiment about React Class component vs Function Component'

    const { container  } = render(<SimpleFunc title={title} />)

    expect(getByText(container, title)).toBeInTheDocument()
  })
})