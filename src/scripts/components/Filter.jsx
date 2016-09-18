import React from 'react'
import { Link } from 'react-router'
import numeral from 'numeral'

import getText from '../helpers/i18n'
import handleOnlyNumbers from '../helpers/partials/handleOnlyNumbers'

class Filter extends React.Component {
  constructor(props, state) {
    super(props);
    this.state = {
      ...state,
      errorMsg: null,
      justSearched: true
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

  getStyleError() {
    return 'var(--errorColor) auto 4px';
  }

  compareMinMaxVals(e) {
    if ( ( this.nodeValMin.value !== '' && this.nodeValMax.value ) &&
        !(parseFloat(this.nodeValMin.value.replace(/\,|\.|\$|R|\s/gi, '')) <=
          parseFloat(this.nodeValMax.value.replace(/\,|\.|\$|R|\s/gi, ''))) ) {
      e.target.style.outline = this.getStyleError();
      this.setState(
        {errorMsg: getText('error-valMinLessMax')}
      );
    } else {
      e.target.style.outline = '';
      this.setState({errorMsg: null});
    }
  }

  handleKeyDownNumbers(e) {
    if (e.which !== 8 && //backspace
        e.which !== 0 && //delete
        !(e.which >= 37 && e.which <= 40) && //arrows
        e.which !== 91 && e.which !== 93 && //safari, chrome (ctrl pads)
        e.which !== 17 && e.which !== 224 && //opera, firefox (ctrl pads)
        !e.ctrlKey && !e.altKey && !e.shiftKey && //ctrl pads
        (e.which < 48 || e.which > 57)) { //for sure: numerals
      e.target.style.outline = this.getStyleError();
      this.setState({errorMsg: getText('error-onlyNumbers')});
    } else {
      this.setState({justSearched: false});
      e.target.style.outline = '';
      this.setState({errorMsg: null});
    }
  }

  handleFiltersURL(e) {
    e.target.style.outline = '';
    this.setState({errorMsg: null});
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
      ),
      freeText: this.nodeFreeText.value.replace(/`|'|"/gi, '')
    });
  }

	render() {
    const filters = this.props.filters;

		return (
				<section className="page-box col-xs-12 col-sm-12 col-md-4">
					<div className="container container-filter" ref={node => {this.nodeScroll = node}}>
						<h3 className="title">{getText('label-filterBy')}</h3>
            <p className="errorMsg">{this.state.errorMsg}</p>

						<form
							className="form form-filters col-xs-12"
							method="get"
							onSubmit={e => {
                e.preventDefault();
							}}
							noValidate
						>
							<fieldset className="form-row">
								<div className="form-group form-field-id">
									<label htmlFor="id">ID</label>
									<input
                    autoComplete="off"
                    ref={node=>{this.nodeId = node}}
                    tabIndex="1"
                    onChange={e=>{
                      this.setState({justSearched: false});
                      this.handleFieldChange();
                    }}
                    onBlur={e=>{
                      this.handleFiltersURL(e);
                    }}
                    onKeyDown={e=>{
                      if (e.which===13){
                        if (filters.id!=='') {
                          e.target.style.outline = '';
                          this.setState({errorMsg: null});
                          this.props.handleSearchID(filters.id);
                          this.setState({justSearched: true});
                        }
                      } else {
                        this.handleKeyDownNumbers(e);
                      }
                    }}
                    id="id" placeholder={getText('label-uniqueId')}
                    value={filters.id} type="text"
                  />
								</div>
								<div className="form-group form-field-area">
									<label htmlFor="area">{getText('label-area')}</label>
									<input
                    autoComplete="off"
                    ref={node=>{this.nodeArea = node}}
                    tabIndex="2"
                    onChange={this.handleFieldChange.bind(this)}
                    onBlur={e=>{
                      this.handleFiltersURL(e);
                    }}
                    onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                    id="area"
                    placeholder={getText('in') + " " + getText('unit-squareMeters')}
                    value={filters.area} type="tel"
                  disabled={filters.id ? "disabled" : ""}
                  />
								</div>
							</fieldset>
              {filters.id && !this.state.justSearched ?
                <p
                  ref={node=>{this.nodeWarning = node;}}
                  className="warning warning-enter form-row"
                >
                  {getText('warning-databaseSearch')}
                  <br/>
                  {getText('warning-pressEnter')}
                </p> : ''
              }
							<fieldset className="form-row">
								<div className="form-group form-field-rooms">
									<label htmlFor="rooms">{getText('label-bedrooms')}</label>
									<input
                    autoComplete="off"
                    ref={node=>{this.nodeBeds = node}}
                    tabIndex="3"
                    onChange={this.handleFieldChange.bind(this)}
                    onBlur={e=>{
                      this.handleFiltersURL(e);
                    }}
                    onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                    id="rooms" placeholder=""
                    value={filters.beds} type="tel"
                  disabled={filters.id ? "disabled" : ""}
                  />
								</div>
								<div className="form-group form-field-baths">
									<label htmlFor="baths">{getText('label-bathrooms')}</label>
									<input
                    autoComplete="off"
                    ref={node=>{this.nodeBaths = node}}
                    tabIndex="4"
                    onChange={this.handleFieldChange.bind(this)}
                    onBlur={e=>{
                      this.handleFiltersURL(e);
                    }}
                    onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                    id="baths" placeholder=""
                    value={filters.baths} type="tel"
                  disabled={filters.id ? "disabled" : ""}
                  />
								</div>
							</fieldset>
							<fieldset className="form-row">
								<div className="form-group form-field-value between-count">
									<label htmlFor="valMin">{getText('label-price')}</label>
									<input
                    autoComplete="off"
                    ref={node=>{this.nodeValMin = node}}
                    tabIndex="5"
                    onChange={e => {
                      this.handleFieldChange();
                      this.compareMinMaxVals(e);
                    }}
                    onBlur={e=>{
                      this.handleFiltersURL(e);
                    }}
                    onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                    id="valMin" placeholder={getText('label-priceMin')}
                    value={
                      filters.valMin != 0 ?
                      (getText('unit-currencyBR') + " " +
                      numeral(filters.valMin).format('0,0')) : ""
                    } type="tel"
                  disabled={filters.id ? "disabled" : ""}
                  />
									<span className="icon itself"></span>
									<input
                    autoComplete="off"
                    ref={node=>{this.nodeValMax = node}}
                    tabIndex="6"
                    onChange={e => {
                      this.handleFieldChange();
                      this.compareMinMaxVals(e);
                    }}
                    onBlur={e=>{
                      this.handleFiltersURL(e);
                    }}
                    onKeyDown={e=>{this.handleKeyDownNumbers(e)}}
                    id="valMax" placeholder={getText('label-priceMax')}
                    value={
                      filters.valMax !=0 ?
                      (getText('unit-currencyBR') + " " +
                      numeral(filters.valMax).format('0,0')) : ""
                    } type="tel"
                  disabled={filters.id ? "disabled" : ""}
                  />
								</div>
							</fieldset>
              <fieldset className="form-row">
								<div className="form-group group-100 form-field-free-text">
                  <label htmlFor="freeText">{getText('label-freeText')}</label>
                  <textarea
                    ref={node=>{this.nodeFreeText = node}}
                    onChange={this.handleFieldChange.bind(this)}
                    onBlur={e=>{
                      this.handleFiltersURL(e);
                    }}
                    rows="2"
                    tabIndex="7"
                    id="freeText"
                    disabled={filters.id ? "disabled" : ""}
                    placeholder={getText('label-freeTextPlaceholder') + "..."}
                    value={filters.freeText}
                  ></textarea>
                </div>
              </fieldset>
						</form>
					</div>
				</section>
		)
	}
}

export default Filter;
