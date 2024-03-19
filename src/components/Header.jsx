import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    const linkStyles = {
        textDecoration: 'none', 
        // inherit parent color
        color: 'inherit' 
    }
    
  return (
    <header style={headerStyles}>
        <div className="container">
            <Link to='/' style={linkStyles}>
                <h2>{text}</h2>
            </Link>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback Review UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header
