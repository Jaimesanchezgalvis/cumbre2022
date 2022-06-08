import React from 'react'

function Boton(props) {
    return (
        <>
            <button
                className="button formacion"
                onClick={props.event}
            >
                {props.evento}
            </button>
        </>
    )
}

export default Boton

// onclick = "tipoeventoformacion()" value = "Formación Especial"
