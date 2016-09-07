import React from 'react';

import Header from './Header'
import Content from './Content'

class Announcements extends React.Component {
  render() {
    return (
      <div>
        <Header headerTitle=" - Anúncios" />
        <Content itemSelected="announcements" filters={this.props.location.query} />
      </div>
    )
  }
}

export default Announcements;
