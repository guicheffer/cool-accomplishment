import React from 'React'
import { Link } from 'react-router';

import Filter from './Filter'
import ListAnnouncements from '../containers/ListAnnouncementsContainer'

class Wrapper extends React.Component {
	render() {
		return (
			<div className="wrapper wrapper-page col-xs-10 col-sm-11 grid">
				<div className="row">
					<Filter />
					<ListAnnouncements />
				</div>
			</div>
		)
	}
}

export default Wrapper;
