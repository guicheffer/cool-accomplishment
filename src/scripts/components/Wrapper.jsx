import React from 'react'
import { Link } from 'react-router';

import Filter from './Filter'
import ListAnnouncements from '../containers/ListAnnouncementsContainer'

class Wrapper extends React.Component {
  componentWillMount() {
    this.props.initFilters(this.props.queryFilters);
  }

	render() {
    return (
			<div className="wrapper wrapper-page col-xs-10 col-sm-11 grid">
				<div className="row">
					<Filter filters={this.props.filters} />
					<ListAnnouncements />
				</div>
			</div>
		)
	}
}

export default Wrapper;
