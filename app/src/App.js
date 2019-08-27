import './App.css';

import React from 'react';

export default class App extends React.Component {
  state = { message: '' }

  fakeApiCall = () => Promise.resolve('Success!')

  onClickHandler = async () => {
    const message = await this.fakeApiCall();
    this.setState({ message })
  }

  render() {
    return (
      <div>
        <span>{this.state.message}</span>
        <button onClick={this.onClickHandler} data-testid='messageButton'>
          Get message!
        </button>
      </div>
    );
  }
};
