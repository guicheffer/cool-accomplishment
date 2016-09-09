import React from 'react'
import { Link } from 'react-router'
import numeral from 'numeral'

import handleOnlyNumbers from '../helpers/partials/handleOnlyNumbers'

class Filter extends React.Component {
  constructor(props, state) {
    super(props);
    this.state = {
      ...state,
      errorMsg: null
    }
  }

  componentDidMount() {
    const containerFilter = this.nodeScroll;
    const wrapperPage = document.querySelector('.wrapper-page');

    // Add event scroll on wrapper
    wrapperPage.addEventListener('scroll', function(e){
      containerFilter.style.padding = `${this.scrollTop}px 0 0 0`;
    });

    //Focus if there is a ID filtering selected
    if (this.props.filters.id !== '') {
      this.nodeId.focus();
    }
  }

  handleKeyDownNumbers(e) {
    if (e.which !== 8 && //backspace
        e.which !== 0 && //delete
        e.which !== 13 && //enter
        e.which !== 91 && e.which !== 93 && //safari, chrome (c.a.s.)
        e.which !== 17 && e.which !== 224 && //opera, firefox (c.a.s.)
        !(e.which >= 37 && e.which <= 40) && //arrows
        !e.ctrlKey &&
        !e.altKey &&
        !e.shiftKey &&
        (e.which < 48 || e.which > 57)) {
      e.target.style.outline = 'var(--errorColor) auto 4px';
      this.setState({errorMsg: 'Opa, este campo só aceita números!'});
    } else {
      e.target.style.outline = '';
      this.setState({errorMsg: null});
    }
  }

  handleFiltersURL() {
    this.props.updateFiltersURL(this.props.filters);
  }

  handleFieldChange() {
    const filters = this.props.filters;

    this.props.handleChangeFilters({
      id: handleOnlyNumbers(this.nodeId.value, filters.id),
      area: handleOnlyNumbers(this.nodeArea.value, filters.area),
      beds: handleOnlyNumbers(this.nodeBeds.value, filters.beds),
      baths: handleOnlyNumbers(this.nodeBaths.value, filters.baths),
      valMin: handleOnlyNumbers(
        this.nodeValMin.value.replace(/\,|\.|\$|R|\s/gi, ''), filters.valMin
      ),
      valMax: handleOnlyNumbers(
        this.nodeValMax.value.replace(/\,|\.|\$|R|\s/gi, ''), filters.valMax
      )
    });
  }

	render() {
    const filters = this.props.filters;

		return (
				<section className="page-box col-xs-12 col-sm-12 col-md-4">
						<div className="container container-filter" ref={node => {this.nodeScroll = node}}>
								<h3 className="title">Filtro</h3>
                <p className="errorMsg">{this.state.errorMsg}</p>

								<form
										className="form form-filters col-xs-12"
										method="get"
										onSubmit={e => {
											e.preventDefault();
										}}
										noValidate
								>
										<div className="form-row">
												<div className="form-group form-field-id">
														<label htmlFor="id">ID</label>
														<input
                              ref={node=>{this.nodeId = node}}
                              onChange={this.handleFieldChange.bind(this)}
                              onBlur={e=>{
                                e.target.style.outline = '';
                                this.setState({errorMsg: null});
                                this.handleFiltersURL();
                              }}
                              onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                              id="id" placeholder="ID Único"
                              value={filters.id} type="tel"
                            />
												</div>
												<div className="form-group form-field-area">
														<label htmlFor="area">Área</label>
														<input
                              ref={node=>{this.nodeArea = node}}
                              onChange={this.handleFieldChange.bind(this)}
                              onBlur={e=>{
                                e.target.style.outline = '';
                                this.setState({errorMsg: null});
                                this.handleFiltersURL();
                              }}
                              onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                              id="area" placeholder=""
                              value={filters.area} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
										</div>
										<div className="form-row">
												<div className="form-group form-field-rooms">
														<label htmlFor="rooms">Quartos</label>
														<input
                              ref={node=>{this.nodeBeds = node}}
                              onChange={this.handleFieldChange.bind(this)}
                              onBlur={e=>{
                                e.target.style.outline = '';
                                this.setState({errorMsg: null});
                                this.handleFiltersURL();
                              }}
                              onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                              id="rooms" placeholder=""
                              value={filters.beds} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
												<div className="form-group form-field-baths">
														<label htmlFor="baths">Banheiros</label>
														<input
                              ref={node=>{this.nodeBaths = node}}
                              onChange={this.handleFieldChange.bind(this)}
                              onBlur={e=>{
                                e.target.style.outline = '';
                                this.setState({errorMsg: null});
                                this.handleFiltersURL();
                              }}
                              onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                              id="baths" placeholder=""
                              value={filters.baths} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
										</div>
										<div className="form-row">
												<div className="form-group form-field-value between-count">
														<label htmlFor="valMin">Valor</label>
														<input
                              ref={node=>{this.nodeValMin = node}}
                              onChange={this.handleFieldChange.bind(this)}
                              onBlur={e=>{
                                e.target.style.outline = '';
                                this.setState({errorMsg: null});
                                this.handleFiltersURL();
                              }}
                              onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                              id="valMin" placeholder="Mínimo"
                              value={"R$ " + numeral(filters.valMin).format('0,0')} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
														<span className="icon itself"></span>
														<input
                              ref={node=>{this.nodeValMax = node}}
                              onChange={this.handleFieldChange.bind(this)}
                              onBlur={e=>{
                                e.target.style.outline = '';
                                this.setState({errorMsg: null});
                                this.handleFiltersURL();
                              }}
                              onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                              id="valMax" placeholder="Máximo"
                              value={"R$ " + numeral(filters.valMax).format('0,0')} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
										</div>
								</form>
						</div>
				</section>
		)
	}
}

export default Filter;
