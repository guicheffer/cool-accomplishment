import React from 'react'
import { Link } from 'react-router';

class Filter extends React.Component {
  handleBlurFieldForm(e, t) {
    return console.log(t);
  }

	componentDidMount() {
		const containerFilter = this.nodeScroll;
		const wrapperPage = document.querySelector('.wrapper-page');

		wrapperPage.addEventListener('scroll', function(e){
			containerFilter.style.padding = `${this.scrollTop}px 0 0 0`;
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
														<input onBlur={e => {
                              this.handleBlurFieldForm(e, this);
                            }} id="id" placeholder="" value={filters.id} type="tel"
                            />
												</div>
												<div className="form-group form-field-area">
														<label htmlFor="area">Área</label>
														<input onBlur={e => {
                              this.handleBlurFieldForm(e, this);
                            }} id="area" placeholder="" value={filters.area} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
										</div>
										<div className="form-row">
												<div className="form-group form-field-rooms">
														<label htmlFor="rooms">Quartos</label>
														<input onBlur={e => {
                              this.handleBlurFieldForm(e, this);
                            }} id="rooms" placeholder="" value={filters.beds} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
												<div className="form-group form-field-baths">
														<label htmlFor="baths">Banheiros</label>
														<input onBlur={e => {
                              this.handleBlurFieldForm(e, this);
                            }} id="baths" placeholder="" value={filters.baths} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
												</div>
										</div>
										<div className="form-row">
												<div className="form-group form-field-value between-count">
														<label htmlFor="valMin">Valor</label>
														<input onBlur={e => {
                              this.handleBlurFieldForm(e, this);
                            }} id="valMin" placeholder="Mínimo" value={filters.valMin} type="tel"
                            disabled={filters.id ? "disabled" : ""}
                            />
														<span className="icon itself"></span>
														<input onBlur={e => {
                              this.handleBlurFieldForm(e, this);
                            }} id="valMax" placeholder="Máximo" value={filters.valMax} type="tel"
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
