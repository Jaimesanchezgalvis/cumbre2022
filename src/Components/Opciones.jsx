// import React, { useState } from 'react'
import Boton from './Boton'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Opciones() {
    // const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="menu">
                <div className="container">
                    <div className="grid-item-boton">
                        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd/MM/yyyy"/> */}
                        {/* {console.log(startDate)} */}
                        {/* {console.log(Date)} */}
                        {/* <h1>{this.state.startDate}</h1> */}
                    </div>
                    <div className="grid-item-boton opciones">
                        <select name="" className="grid-item-boton">
                            <option value="">Orador</option>
                            <option value="0">Myriam de la Sierra</option>
                            <option value="1">Alex Rew</option>
                            <option value="2">Manu Darrocha</option>
                            <option value="3">Mariano Solano</option>
                            <option value="4">Georgina Ferrón Arruzazabala</option>
                            <option value="5">Borja Rew</option>
                            <option value="6">Miky Palacios</option>
                            <option value="7">Céline Bordenave</option>
                            <option value="8">Pepi Morejón Rodriguez</option>
                            <option value="9">Adamo Membrives</option>
                            <option value="10">Adolfo Matute</option>
                            <option value="11">Adrian Mier</option>
                            <option value="12">Alejandro Viadero</option>
                            <option value="13">Andres Gonzalez</option>
                            <option value="14">Angels Matas</option>
                            <option value="15">Antonio Jesus Sanchez</option>
                            <option value="16">Aritza Bengoetxea</option>
                            <option value="17">Arnold Marin</option>
                            <option value="18">Arrate Revilla</option>
                            <option value="19">Art Napolitano</option>
                            <option value="20">Arturo_Hidalgo</option>
                            <option value="21">Bash Bokhari</option>
                            <option value="22">Bea Perez</option>
                            <option value="23">Cristina Campos</option>
                            <option value="24">Cristina Pozuelo</option>
                            <option value="25">Dani Volonino</option>
                            <option value="26">Daniel Calle</option>
                            <option value="27">David Pindado</option>
                            <option value="28">Edgar Perez</option>
                            <option value="29">Eduardo Lopez</option>
                            <option value="30">Eduardo Perez</option>
                            <option value="31">Efrain Giraldo</option>
                            <option value="32">Elsa Armas</option>
                            <option value="33">Fernando Ezquerra</option>
                            <option value="34">Francisco Torres</option>
                            <option value="35">Gabriela Suarez</option>
                            <option value="36">Georgina Ferron</option>
                            <option value="37">Greg Provenzano</option>
                            <option value="38">Hector Seguin</option>
                            <option value="39">Iker Yurrebaso</option>
                            <option value="40">Ines_Volonino</option>
                            <option value="41">Ion Ander Otaolea</option>
                            <option value="42">Isaac Cardona</option>
                            <option value="43">Isabel_Girol</option>
                            <option value="44">Jaime Sanchez Galvis</option>
                            <option value="45">James Adlam</option>
                            <option value="46">Javier Galeote</option>
                            <option value="47">Javier Garcia</option>
                            <option value="48">Javier Toledano</option>
                            <option value="49">Javier Torroglosa</option>
                            <option value="50">Jesus Gomez</option>
                            <option value="51">Jinsop Echevarria</option>
                            <option value="52">Joao Paulo Reis</option>
                            <option value="53">Jose Meseguer</option>
                            <option value="54">Juan Carlos Justel</option>
                            <option value="55">Juan Luis Rodriguez</option>
                            <option value="56">Juan Manuel Gomez</option>
                            <option value="57">Juan Ortin</option>
                            <option value="58">Larry Raskin</option>
                            <option value="59">Lucia Soriano</option>
                            <option value="60">Luis Daniel Camilo</option>
                            <option value="61">Mafe Calcines</option>
                            <option value="62">Manel Lazaro</option>
                            <option value="63">Marcos Carrillo</option>
                            <option value="64">María Saiz</option>
                            <option value="65">Martha_Angélica_Salinas</option>
                            <option value="66">Miguel_Rocha</option>
                            <option value="67">Mike Cupiz</option>
                            <option value="68">Oier_Yurrebaso</option>
                            <option value="69">Omar Ahumada</option>
                            <option value="70">Pablo Luguera</option>
                            <option value="71">Patri Jimenez</option>
                            <option value="72">Patrick_Llopis</option>
                            <option value="73">Pepa_Frigolet</option>
                            <option value="74">Pepe Salort</option>
                            <option value="75">Pepi Díaz</option>
                            <option value="76">Ramon Casate</option>
                            <option value="77">Raquel Santana</option>
                            <option value="78">Richard Rew</option>
                            <option value="79">Rita Rodriguez</option>
                            <option value="80">Rocío Gutierrez</option>
                            <option value="81">Santiago Cassino</option>
                            <option value="82">Sara duran</option>
                            <option value="83">Sergio Ortega</option>
                            <option value="84">Soufyane Messouci</option>
                            <option value="85">Steven Obando</option>
                            <option value="86">Victor Vazquez</option>
                            <option value="87">Yago Uribe</option>
                        </select>
                    </div>
                    <div className="grid-item-boton">
                        <Boton evento="Crear" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Opciones
