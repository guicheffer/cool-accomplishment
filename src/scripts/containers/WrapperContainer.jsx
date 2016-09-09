import { connect } from 'react-redux'
import { initFilters, changeFilters,
  fetchAnnByID,
  fetchAnnByIDSuccess,
  fetchAnnByIDFailure } from '../actions/WrapperAction'

import Wrapper from '../components/Wrapper'

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.Wrapper.filters,
    annByID: state.Wrapper.annByID
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initFilters: queryFilters => {
      dispatch(initFilters(queryFilters));
    },
    changeFilters: currentFilters => {
      dispatch(changeFilters(currentFilters))
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

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
