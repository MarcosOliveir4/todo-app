import { render } from '@testing-library/react'
import Home from '@/app/page'

const sut = render(<Home />)

describe('<Home />', () => {
  it('should render the heading', () => {
    const { getByRole } = sut
    const heading = getByRole('heading', { name: /Tarefinhas/i })
    expect(heading).toHaveClass('font-bold')
    expect(heading).toBeInTheDocument()
  })
})
