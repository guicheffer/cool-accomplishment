import React from 'react';

import Sidebar from './Sidebar'
import Wrapper from '../containers/WrapperContainer'

class Content extends React.Component {
  render() {
    return (
      <div className="content spotippos-content row">
				<Sidebar itemSelected={this.props.itemSelected} />
        {
          this.props.itemSelected === "announcements" ?
          <Wrapper
            changeQueryFilters={this.props.changeQueryFilters}
            queryFilters={this.props.filters}
          /> :
          <section className="dashboard col-xs-7 col-sm-8 col-md-10" role="contentinfo">
            <div className="centralize-middle">
              <h3>
                Olá, seja bem-vindo ao Spotippos! <br/>
                <small>A ferramenta que te ajudará encontrar o imóvel dos seus sonhos</small>
              </h3>
              <p>Por favor, selecione uma das opções da barra lateral esquerda.</p>
            </div>
          </section>
        }
			</div>
    )
  }
}

export default Content;
