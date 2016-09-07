import { connect } from 'react-redux'
import { initFilters, changeFilters, disableChanged } from '../actions/WrapperAction'

import Wrapper from '../components/Wrapper'

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.Wrapper.filters
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
    disableChanged: currentFilters => {
      dispatch(disableChanged(currentFilters))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
