import React from 'react'
import numeral from 'numeral'

import getText from '../helpers/i18n'

class AnnItem extends React.Component {
  /*thanks to clickmeter gifs*/
  getImgTest() {
    return "http://goo.gl/FCYIKF";
  }

  render() {
    const ann = this.props.ann;

    return (
      <li key={ann.id} className="ann-item grid">
          <div className="row">
              <figure className="ann-figure col-sm-12 col-md-5">
                  <a href="javascript:void(0)">
                      <img
                        alt={ann.title}
                        className="ann-image"
                        src={this.getImgTest()}
                      />
                    <figcaption>
                      {getText('unit-currencyBR') + " "}
                      {numeral(ann.price).format('0,0.00')}
                    </figcaption>
                  </a>
              </figure>
              <article className="ann-info col-sm-12 col-md-7" role="result">
                  <a href="javascript:void(0)">
                      <p className="ann-show-id">ID. {ann.id}</p>
                      <h4 className="ann-title">{ann.title}</h4>
                  </a>
                  <p className="ann-description">{ann.description}</p>

                  <ul className="ann-info-cards">
                      <li className="info-card card-area">
                          <span className="icon sprt sprt-area"></span>
                          <p>{ann.squareMeters} {getText('unit-squareMeters')}</p>
                      </li>
                      <li className="info-card card-beds">
                          <span className="icon sprt sprt-beds"></span>
                          <p>{parseInt(ann.beds) > 1 ?
                              (ann.beds + " " + getText('label-bedrooms')) :
                              (ann.beds + " " + getText('label-bedroom')) }
                          </p>
                      </li>
                      <li className="info-card card-bathroom">
                          <span className="icon sprt sprt-bathroom"></span>
                          <p>{parseInt(ann.baths) > 1 ?
                              (ann.baths + " " + getText('label-bathrooms')) :
                              (ann.baths + " " + getText('label-bathroom')) }
                          </p>
                      </li>
                      <li className="info-card card-link">
                          <a
                              href="javascript:void(0)"
                              className="btn btn-primary"
                              data-id={ann.id}
                          >{getText('label-viewAnn')}</a>
                      </li>
                  </ul>
              </article>
          </div>
      </li>
    )
  }
}

export default AnnItem;
