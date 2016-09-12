import React from 'react';
import _ from 'lodash'

import replaceVal from '../helpers/partials/replaceVal'
import getText from '../helpers/i18n'

import AnnItem from './AnnItem'

class ListAnnouncements extends React.Component {
  componentWillMount() {
    this.props.fetchAnns();
  }

  renderAnnouncements(anns, error) {
    const warningMsgStyle = {'textAlign': 'center', 'marginTop': '5%'}

    if (error) {
      return <p style={warningMsgStyle}>
              {getText('error-pleaseTryAgain')}
             </p>
    } else if (!_.size(anns)) {
      return <p style={warningMsgStyle}>
              {getText('error-noAnnsFound')}
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
            anns = _.filter(anns, property => {
              return parseFloat(property.price) >= parseFloat(filters.valMin) &&
                     parseFloat(property.price) <= parseFloat(filters.valMax);
            })
          }
          break;
        case "freeText":
          val = replaceVal(val);
          
          anns = _.filter(anns, property => {
            return replaceVal(property.title).indexOf(val) !== -1 ||
                   replaceVal(property.description).indexOf(val) !== -1;
          })
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

      if (this.props.filters.id !== filteredAnns.id ||
          typeof filteredAnns.id === 'undefined') {
        filteredAnns = _.filter(anns, property => {
          return property.id == this.props.filters.id;
        });
      }
    } else {
      filteredAnns = this.filterAnns(anns, filters);
    }

    return (
      <section className="page-box col-xs-12 col-sm-12 col-md-8">
        <div className={ "container container-results" + ( loading ? " loading" : "" ) }>
          { loading ? <span className="icon icon-loader"></span> :
            this.renderAnnouncements(filteredAnns, error)
          }
        </div>
      </section>
    )
  }
}

export default ListAnnouncements;
