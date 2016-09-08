import { connect } from 'react-redux'
import {
  fetchAnns,
  fetchAnnsSuccess,
  fetchAnnsFailure,
  fetchAnnByID,
  fetchAnnByIDSuccess,
  fetchAnnByIDFailure } from '../actions/ListAnnouncementsAction'

import ListAnnouncements from '../components/ListAnnouncements'

const mapStateToProps = (state, ownProps) => {
  return {
    annsList: state.ListAnnouncements.annsList,
    annByID: state.ListAnnouncements.annByID
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAnns: () => {
      dispatch(fetchAnns()).then(response => {
        return typeof response.payload.data !== 'undefined' ?
        dispatch(fetchAnnsSuccess(response.payload)) :
        dispatch(fetchAnnsFailure(response.payload));
      });
    },
    fetchAnnByID: id => {
      dispatch(fetchAnnByID(id)).then(response => {
        return typeof response.payload.data !== 'undefined' ?
        dispatch(fetchAnnByIDSuccess(response.payload)) :
        dispatch(fetchAnnByIDFailure(response.payload));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAnnouncements);
