import React from 'react';

import Sidebar from './Sidebar'
import Wrapper from './Wrapper'

class Content extends React.Component {
  render() {
    return (
      <div className="content spotippos-content row">
				<Sidebar itemSelected={this.props.itemSelected} />
        {
          this.props.itemSelected === "announcements" ? <Wrapper /> : ""
        }
			</div>
    )
  }
}

export default Content;
