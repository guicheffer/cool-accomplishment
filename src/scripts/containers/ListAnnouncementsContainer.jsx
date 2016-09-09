import { connect } from 'react-redux'
import {
  fetchAnns,
  fetchAnnsSuccess,
  fetchAnnsFailure } from '../actions/ListAnnouncementsAction'

import ListAnnouncements from '../components/ListAnnouncements'

const mapStateToProps = (state, ownProps) => {
  return {
    annsList: state.ListAnnouncements.annsList
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAnnouncements);
