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

	render() {
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
														<input id="id" placeholder="" type="tel"/>
												</div>
												<div className="form-group form-field-area">
														<label htmlFor="area">Área</label>
														<input id="area" placeholder="" type="text"/>
												</div>
										</div>
										<div className="form-row">
												<div className="form-group form-field-rooms">
														<label htmlFor="rooms">Quartos</label>
														<input id="rooms" placeholder="" type="text"/>
												</div>
												<div className="form-group form-field-baths">
														<label htmlFor="baths">Banheiros</label>
														<input id="baths" placeholder="" type="text"/>
												</div>
										</div>
										<div className="form-row">
												<div className="form-group form-field-value between-count">
														<label htmlFor="min">Valor</label>
														<input id="min" placeholder="Mínimo" type="text"/>
														<span className="icon itself"></span>
														<input id="max" placeholder="Máximo" type="text"/>
												</div>
										</div>
								</form>
						</div>
				</section>
		)
	}
}

export default Filter;
