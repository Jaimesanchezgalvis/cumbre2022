import React, {Fragment} from 'react'
import "./Calc.scss";

function Calc() {
    return (
        <Fragment>
            {/* <!-- Container --> */}
            <div className="container" >
                {/* <!-- Primera fila Dispaly--> */}
                <div className="row">
                    <input name="display" id="display" className="col-12" type="text" />
                </div>
                {/* <!-- Segunda fila --> */}
                <div className="row">
                    <button className="col-3" onClick="display_numeros(7)">7</button>
                    <button className="col-3" onClick="display_numeros(8)">8</button>
                    <button className="col-3" onClick="display_numeros(9)">9</button>
                    <button className="col-3" onClick="divide()">/</button>
                </div>
                {/* <!-- Tercera fila --> */}
                <div className="row">
                    <button className="col-3" onClick="display_numeros(4)">4</button>
                    <button className="col-3" onClick="display_numeros(5)">5</button>
                    <button className="col-3" onClick="display_numeros(6)">6</button>
                    <button className="col-3" onClick="multiplica()">*</button>
                </div>
                <div className="row">
                    {/* <!-- Cuarta fila --> */}
                    <button className="col-3" onClick="display_numeros(1)">1</button>
                    <button className="col-3" onClick="display_numeros(2)">2</button>
                    <button className="col-3" onClick="display_numeros(3)">3</button>
                    <button className="col-3" onClick="resta()">-</button>
                </div>
                {/* <!-- Quinta fila --> */}
                <div className="row">
                    <button className="col-9" value="0" onClick="display_numeros(0)">0</button>
                    <button className="col-3" value="+" onClick="suma()">+</button>
                </div>
                {/* <!-- Sexta fila --> */}
                <div className="row">
                    <button className="col-6" onClick="resultado()">=</button>
                    <button className="col-6" onClick="location.reload()">C</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Calc


