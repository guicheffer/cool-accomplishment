import React from 'react';

import Header from './Header'
import Content from './Content'

class RootNoOptionSelected extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content itemSelected="null" />
      </div>
    )
  }
}

export default RootNoOptionSelected;
