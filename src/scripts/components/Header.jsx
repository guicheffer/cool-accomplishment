import React from 'React'
import { Link } from 'react-router';

class Header extends React.Component {
	render() {
		return (
			<header role="banner">
				<nav className="nav nav-horizontal nav-header row" role="navigation">
  				<Link to="/" className="nav-header-subtitle col-xs-2 col-sm-1">
  					<strong className="icon sprt sprt-vivareal">Viva Real</strong>
  				</Link>
  				<h1 className="nav-header-title text-xs-10 text-sm-11">Spotippos{this.props.headerTitle}</h1>
				</nav>
			</header>
		)
	}
}

export default Header;
