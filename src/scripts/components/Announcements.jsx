import React from 'react';
import _ from 'lodash';

import Header from './Header'
import Content from './Content'

class Announcements extends React.Component {
  constructor(props, context) {
    super(props);
    this.router = context.router;
  }

  changeQueryFilters(filters) {
    this.router.push({
      pathname: '/announcements',
      query: _.omitBy(_.omitBy(filters, _.isEmpty), _.isBoolean)
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
