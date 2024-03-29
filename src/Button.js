import PropTypes from 'prop-types'

export function Button({text, name = 'Usuario'}){

    return <button onClick={function(){
        console.log("Hola Mundo bro")
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some User'
}