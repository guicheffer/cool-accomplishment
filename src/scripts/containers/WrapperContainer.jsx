import { connect } from 'react-redux'
import { initFilters } from '../actions/WrapperAction'

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
