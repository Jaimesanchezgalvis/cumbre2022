import React from 'react'
import { Children } from 'react'

function Flyerfinal({nombre, posicion, avatar, children}) {
    // function tipoeventoformacion() {
    //     // Crear div del flyer
    //     const = document.createElement("div");
    //     flyerevent.className = "container--flyer";
    //     document.querySelector(".flyer").appendChild(flyerevent);
    //     // modal titulo formacion
    //     let container = document.querySelector(".container");
    //     let boton = document.querySelector(".formacion").value;
    //     container.innerHTML = "Has selecionado " + boton;
    //     // crear titulo
    //     const titulo = document.createElement("p");
    //     let descripcion = boton;
    //     titulo.innerHTML = descripcion;
    //     document.querySelector(".container--flyer").appendChild(titulo);
    // }



    return (
        <>
            <div className="container--flyer">
                {/* <img src={require(`../${avatar}`)} alt=""/> */}
                <p>{nombre}</p>
                <p>{posicion}</p>
                {children}
            </div>
            <div>
            </div>
        </>
    )
}

export default Flyerfinal
