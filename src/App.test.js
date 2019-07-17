import React from 'react';
import { render } from 'react-testing-library';
import App from './App';



describe('App component', () => {
  const setup = () => {
    return render(<App/>);
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);

    const { container } = setup();
    expect(container).to 
  });
});