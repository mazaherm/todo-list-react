import { render, within } from '@testing-library/react';
import Header from './Header';

const setup = (state = {}) => {
  const utils = render(<Header {...state} />);
  const header = utils.getByRole('banner');
  return {
    header,
    ...utils
  }
}

describe('the header component', () => {
  it('renders the component without errors', () => {
    const { header } = setup();
    expect(header).toBeInTheDocument();
  });

  it('renders a heading', () => {
    const { header } = setup({ heading: 'Todo List' });
    const { getByText } = within(header);

    expect(getByText(/todo list/i)).toBeInTheDocument();
  })

  it('renders an background image', () => {
    const bannerImg = '../../assets/banner.jpg'
    const { header } =  setup({ heading: 'image', bgImage: bannerImg });
    const { getByAltText } =  within(header);
    const backgroundImage = getByAltText('image');

    expect(backgroundImage).toHaveAttribute('src', bannerImg);
  });
});
