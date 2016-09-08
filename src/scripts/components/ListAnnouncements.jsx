import React from 'react';
import _ from 'lodash'

import AnnItem from './AnnItem'

class ListAnnouncements extends React.Component {
  componentWillMount() {
    this.props.fetchAnns();
  }

  renderAnnouncements(anns, error) {
    const warningMsgStyle = {'textAlign': 'center', 'marginTop': '5%'}

    if (error) {
      return <p style={warningMsgStyle}>
              Por favor, tente novamente. &nbsp;&nbsp; 😐
             </p>
    } else if (!anns.length) {
      return <p style={warningMsgStyle}>
        💩 &nbsp;&nbsp; Nenhum resultado de anúncio encontrado.
      </p>
    } else {
      return (
        <ul className="results-anns">
          { _.map(anns, ann => {
            return <AnnItem key={ann.id} ann={ann}/>
            })
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
        case "id": /*TEMPORARY CASE 😞😳😩*/
          anns = _.filter(anns, property => {
            return property.id == val;
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

    let filteredAnns = this.filterAnns(anns, filters);

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
