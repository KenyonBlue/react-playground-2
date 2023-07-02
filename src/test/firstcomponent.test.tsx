import { FirstComponent }  from '../App'
import { render } from '@testing-library/react';

describe('<firstComponent/>', () => {
    it('should render', async () => {
        const {getByText} = render(<div>hello world</div>)
        expect(getByText('hello world')).toBeInTheDocument()
    })
})