import '@testing-library/jest-dom/extend-expect';

import * as rtl from '@testing-library/react';
import React from 'react';

import App from './App';


it('renders success', async () => {
  const wrapper = rtl.render(
    <App />
  );
  const successText = wrapper.queryByText(/success/i);
  expect(successText).not.toBeInTheDocument();
  rtl.fireEvent.click(wrapper.getByTestId('messageButton'));
  expect(await wrapper.findByText(/success/i));
});
