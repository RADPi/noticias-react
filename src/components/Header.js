import PropTypes from 'prop-types'

function Header({ titulo }) {
	return (
		<nav className="nav-wrapper light-blue darken-3">
			<a href="#!" className="brand-logo">
				{titulo}
			</a>
		</nav>
	)
}

Header.propTypes = {
	titulo: PropTypes.string.isRequired,
}

export default Header
