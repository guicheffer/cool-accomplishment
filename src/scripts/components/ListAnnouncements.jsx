import React from 'react';

import AnnItem from './AnnItem'

class ListAnnouncements extends React.Component {
  componentWillMount() {
    this.props.fetchAnns();
  }

  renderAnnouncements(anns, error) {
    if ( error ) {
      return <p style={{'textAlign': 'center', 'marginTop': '5%'}}>Por favor, tente novamente!</p>
    } else if (!anns.length) {
      return <p style={{'textAlign': 'center', 'marginTop': '5%'}}>Nenhum anúncio encontrado</p>
    } else {
      return (
        <ul className="results-anns">
          {anns.map(ann => {
            return <AnnItem key={ann.id} ann={ann}/>
          })}
        </ul>
      )
    }
  }

  render() {
    const { anns, loading, error } = this.props.annsList;

    return (
      <section className="page-box col-xs-12 col-sm-12 col-md-8">
        <div className={ "container container-results" + ( loading ? " loading" : "" ) }>
          { loading ? <span className="icon icon-loader"></span> :
            this.renderAnnouncements(anns, error)
          }
        </div>
      </section>
    )
  }
}

export default ListAnnouncements;
