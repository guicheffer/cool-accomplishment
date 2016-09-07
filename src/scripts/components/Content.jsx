import React from 'react';

import Sidebar from './Sidebar'
import Wrapper from '../containers/WrapperContainer'

class Content extends React.Component {
  render() {
    return (
      <div className="content spotippos-content row">
				<Sidebar itemSelected={this.props.itemSelected} />
        {
          this.props.itemSelected === "announcements" ?
          <Wrapper
            changeQueryFilters={this.props.changeQueryFilters}
            queryFilters={this.props.filters}
          /> : ""
        }
			</div>
    )
  }
}

export default Content;
