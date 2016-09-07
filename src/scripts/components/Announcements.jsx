import React from 'react';
import map from 'lodash/map';

import Header from './Header'
import Content from './Content'

class Announcements extends React.Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
  }

  changeQueryFilters(filters) {
    window.$filters = filters;

    this.router.replace({
      pathname: '/announcements',
      query: filters
    });
  }

  render() {
    return (
      <div>
        <Header headerTitle=" - Anúncios" />
        <Content
          itemSelected="announcements"
          filters={this.props.location.query}
          changeQueryFilters={this.changeQueryFilters.bind(this)}
        />
      </div>
    )
  }
}

Announcements.contextTypes = {
  router: () => { React.PropTypes.func.isRequired }
};

export default Announcements;
