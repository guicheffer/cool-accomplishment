import React from 'react';
import _ from 'lodash'

import AnnItem from './AnnItem'

class ListAnnouncements extends React.Component {
  componentWillMount() {
    this.props.fetchAnns();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.filters.id !== "") {
      if (typeof this.results.dataset.showingId !== 'undefined') {
        if (this.results.dataset.showingId ==
            nextProps.filters.id) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  componentDidUpdate() {
    if (this.props.filters.id !== "") {
      this.props.fetchAnnByID(this.props.filters.id);
    }
  }

  renderAnnouncements(anns, error) {
    const warningMsgStyle = {'textAlign': 'center', 'marginTop': '5%'}

    if (error) {
      return <p style={warningMsgStyle}>
              Por favor, tente novamente. &nbsp;&nbsp; 😐
             </p>
    } else if (!_.size(anns)) {
      return <p style={warningMsgStyle}>
        💩 &nbsp;&nbsp; Nenhum resultado de anúncio encontrado.
      </p>
    } else {
      return (
        <ul className="results-anns">
          { anns.length ? _.map(anns, ann => {
            return <AnnItem key={ann.id} ann={ann}/>
            }) : <AnnItem key={anns.id} ann={anns}/>
          }
        </ul>
      )
    }
  }

  filterAnns(anns, filters) {
    _.forEach(filters, (val, key) => {
      switch (key) {
        case "area":
          anns = _.filter(anns, property => {
            return property.squareMeters == val;
          })
          break;
        case "beds":
          anns = _.filter(anns, property => {
            return property.beds == val;
          })
          break;
        case "baths":
          anns = _.filter(anns, property => {
            return property.baths == val;
          })
          break;
        case "valMin":
        case "valMax":
          if (typeof filters.valMin === 'undefined') {
            anns = _.filter(anns, property => {
              return parseFloat(property.price) <= parseFloat(filters.valMax);
            })
          } else if (typeof filters.valMax === 'undefined') {
            anns = _.filter(anns, property => {
              return parseFloat(property.price) >= parseFloat(filters.valMin);
            })
          } else {
            return parseFloat(property.price) >= parseFloat(filters.valMin) &&
                   parseFloat(property.price) <= parseFloat(filters.valMax);
          }
          break;
        default:
          return false;
      }
    });

    return anns;
  }

  render() {
    const { anns, loading, error } = this.props.annsList;
    const filters = _.omitBy(this.props.filters, _.isEmpty);

    let filteredAnns = [];

    if (this.props.filters.id !== "") {
      const { ann, loading, error } = this.props.annByID;
      filteredAnns = ann;
    } else {
      filteredAnns = this.filterAnns(anns, filters);
    }

    return (
      <section className="page-box col-xs-12 col-sm-12 col-md-8">
        <div
          className={ "container container-results" + ( loading ? " loading" : "" ) }
          ref={node => {this.results = node;}}
          data-showing-id={
            typeof filteredAnns.id !== 'undefined' && !loading ?
            filteredAnns.id : (filters.id !== '' && !loading ? 'null' : '')
          }
        >
          { loading ? <span className="icon icon-loader"></span> :
            this.renderAnnouncements(filteredAnns, error)
          }
        </div>
      </section>
    )
  }
}

export default ListAnnouncements;
