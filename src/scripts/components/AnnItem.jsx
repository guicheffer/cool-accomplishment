import React from 'react'

/*
  inspired on http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript#149099
*/
Number.prototype.prettyPrice = function(c, d, t){
  var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;

   return s +
          (j ? i.substr(0, j) + t : "") +
          i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t)
          + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

class AnnItem extends React.Component {
  render() {
    const ann = this.props.ann;

    return (
      <li className="ann-item grid">
          <div className="row">
              <figure className="ann-figure col-sm-12 col-md-5">
                  <a href="javascript:void(0)">
                      <img
                          alt={ann.title}
                          className="ann-image"
                          src="http://goo.gl/MW#jUJa" /*thanks to clickmeter gifs*/
                      />
                      <figcaption>R$ {parseFloat(ann.price).prettyPrice(2, '.', ',')}</figcaption>
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
                          <p>{ann.squareMeters} M²</p>
                      </li>
                      <li className="info-card card-beds">
                          <span className="icon sprt sprt-beds"></span>
                          <p>{parseInt(ann.beds) > 1 ? (ann.beds + " quartos") : (ann.beds + " quarto") }</p>
                      </li>
                      <li className="info-card card-bathroom">
                          <span className="icon sprt sprt-bathroom"></span>
                          <p>{parseInt(ann.baths) > 1 ? (ann.baths + " banheiros") : (ann.baths + " banheiro") }</p>
                      </li>
                      <li className="info-card card-link">
                          <a
                              href="javascript:void(0)"
                              className="btn btn-primary"
                              data-id={ann.id}
                          >Visualizar anúncio</a>
                      </li>
                  </ul>
              </article>
          </div>
      </li>
    )
  }
}

export default AnnItem;
