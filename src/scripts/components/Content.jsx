import React from 'react';

import getText from '../helpers/i18n'

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
                {getText('msg-beWelcome')}
                <br/>
                <small>{getText('msg-slogan')}</small>
              </h3>
              <p>{getText('msg-initialHelp')}</p>
            </div>
          </section>
        }
			</div>
    )
  }
}

export default Content;
