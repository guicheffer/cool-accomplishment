import React from 'react'
import { Link } from 'react-router';

import Filter from './Filter'
import ListAnnouncements from '../containers/ListAnnouncementsContainer'

class Wrapper extends React.Component {
  componentWillMount() {
    this.props.initFilters(this.props.queryFilters);
  }

  componentDidMount() {
    if (typeof this.props.queryFilters.id !== 'undefined') {
      if (typeof this.props.queryFilters.id !== '') {
        this.handleSearchID(this.props.queryFilters.id);
      }
    }
  }

  handleSearchID(id) {
    this.props.fetchAnnByID(id);
  }

	render() {
    return (
			<div className="wrapper wrapper-page col-xs-10 col-sm-11 grid">
				<div className="row">
					<Filter
            filters={this.props.filters}
            handleChangeFilters={this.props.changeFilters}
            updateFiltersURL={this.props.changeQueryFilters}
            handleSearchID={this.handleSearchID.bind(this)}
          />
        <ListAnnouncements annByID={this.props.annByID}
          filters={this.props.filters}
        />
				</div>
			</div>
		)
	}
}

export default Wrapper;
