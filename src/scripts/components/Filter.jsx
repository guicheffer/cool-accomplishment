import React from 'react'
import { Link } from 'react-router';

class Filter extends React.Component {
  componentDidMount() {
    const containerFilter = this.nodeScroll;
    const wrapperPage = document.querySelector('.wrapper-page');

    wrapperPage.addEventListener('scroll', function(e){
      containerFilter.style.padding = `${this.scrollTop}px 0 0 0`;
    });
  }

  handleFieldChange(e) {
    this.props.handleFilters({
      id: this.nodeId.value,
      area: this.nodeArea.value,
      beds: this.nodeBeds.value,
      baths: this.nodeBaths.value,
      valMin: this.nodeValMin.value,
      valMax: this.nodeValMax.value
    });
  }

	render() {
    const filters = this.props.filters;

		return (
				<section className="page-box col-xs-12 col-sm-12 col-md-4">
						<div className="container container-filter" ref={node => {this.nodeScroll = node}}>
								<h3 className="title">Filtro</h3>

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
														<input onChange={e => {
                              this.handleFieldChange(e);
                            }} ref={node=>{this.nodeId = node}}
                              id="id" placeholder=""
                              value={filters.id} type="tel"
                            />
												</div>
												<div className="form-group form-field-area">
														<label htmlFor="area">Área</label>
														<input onChange={e => {
                              this.handleFieldChange(e);
                            }} ref={node=>{this.nodeArea = node}}
                              id="area" placeholder=""
                              value={filters.area} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
										</div>
										<div className="form-row">
												<div className="form-group form-field-rooms">
														<label htmlFor="rooms">Quartos</label>
														<input onChange={e => {
                              this.handleFieldChange(e);
                            }} ref={node=>{this.nodeBeds = node}}
                              id="rooms" placeholder=""
                              value={filters.beds} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
												<div className="form-group form-field-baths">
														<label htmlFor="baths">Banheiros</label>
														<input onChange={e => {
                              this.handleFieldChange(e);
                            }} ref={node=>{this.nodeBaths = node}}
                              id="baths" placeholder=""
                              value={filters.baths} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
										</div>
										<div className="form-row">
												<div className="form-group form-field-value between-count">
														<label htmlFor="valMin">Valor</label>
														<input onChange={e => {
                              this.handleFieldChange(e);
                            }} ref={node=>{this.nodeValMin = node}}
                              id="valMin" placeholder="Mínimo"
                              value={filters.valMin} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
														<span className="icon itself"></span>
														<input onChange={e => {
                              this.handleFieldChange(e);
                            }} ref={node=>{this.nodeValMax = node}}
                              id="valMax" placeholder="Máximo"
                              value={filters.valMax} type="tel"
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
