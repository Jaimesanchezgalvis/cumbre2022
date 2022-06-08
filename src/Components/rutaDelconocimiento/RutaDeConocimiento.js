import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import '../../Components/Styles.scss';
import react1 from "../../../src/assets/cursoReact1.png";
import react2 from "../../../src/assets/cursoReact2.png";



export const RutaDeConocimiento = () => {



    useEffect(() => {
        Aos.init()
    }, []);

    return (
        <div className="container" data-aos="fade-up-right">

            <h3 className='mb-3'>En construccion</h3><br />
{/*             
            <div className="row" data-aos="fade-up-right" >
                <p>Seamos honestos, aunque soy emprendedor y autonomo hace muchos años a que mola poner en tu CV que has hecho un Bootcamp fullstak $$$, :/ en mi caso personal si me gusto pero no es nada fácil pasar del $ de PHP al '['{}']' de Javascript lo que más me sirvió y valoro es que me mostro lo que no quiero hacer, al ver un stack tan completo me pude decidir rápidamente por lo que quería hacer. entonces a la vida siempre de Front-End.</p><br />
            </div>
            <div className="row" data-aos="fade-up-left">
                <p className='mt-2'>Cuando termine el Bootcamp tuve una empanada mental muy fuerte: / pero no quería renunciar y otro Bootcamp definitivamente no era una opción así que con todo lo que vi en internet cree mi propia ruta del aprendizaje, la cual con paciencia y dedicacion me esta abriendo un mundo maravilloso de infinitas posibilidades y así como me sirvió a mi espero que te pueda servir y sobre todo que te ahorre muchas horas de buscar información en internet, no importa terminarla rápido lo importante es asimilar los conceptos a tu ritmo. </p>
            </div>

            <div className="row">

                <div
                    className="col-12 col-md-5 embed-responsive embed-responsive-16by9"
                    data-aos="fade-up-right"
                >
                    
                    <iframe
                        title="html"
                        className="embed-responsive-item videosRuta"
                        src="https://www.youtube.com/embed/kN1XP-Bef7w"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        name='Hola'
                    ></iframe>
                    <div className='display'>
                        <aside><p className='col-12 col-md-5  d-inline p-2 bg-primary text-white'>1. HTML Duración: 2:24 hrs</p></aside>

                    </div>

                </div>

                <div
                    className="col-12 col-md-5 embed-responsive embed-responsive-16by9"
                    data-aos="fade-up-left"
                >
                    <iframe
                        title="css"
                        className="embed-responsive-item videosRuta"
                        src="https://www.youtube.com/embed/OWKXEJN67FE"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <p className='col-12 col-md-5 d-inline d-inline p-2 bg-primary text-white'>2. CSS Duración: 9:46 hrs</p>

                </div>
            </div>

            <div className="row">
                <div
                    className="col-12 col-md-5 embed-responsive embed-responsive-16by9"
                    data-aos="fade-up-right"
                >
                    <iframe
                        title="Javascrip1"
                        className="embed-responsive-item videosRuta"
                        src="https://www.youtube.com/embed/z95mZVUcJ-E"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <p className='col-12 col-md-5 d-inline d-inline p-2 bg-primary text-white'>3. Javascript Junior Duración: 10:00 hrs</p>

                </div>

                <div
                    className="col-12 col-md-5 embed-responsive embed-responsive-16by9"
                    data-aos="fade-up-left"
                >
                    <iframe
                        title="Javascrip2"
                        className="embed-responsive-item videosRuta"
                        src="https://www.youtube.com/embed/xOinGb2MZSk"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <p className='col-12 col-md-5 d-inline d-inline p-2 bg-primary text-white'>4. Javascript Mid Level Duración: 7:56 hrs</p>

                </div>
            </div>

            <div className="row">
                <div
                    className="col-12 col-md-5 embed-responsive embed-responsive-16by9"
                    data-aos="fade-up-right"
                >
                    <iframe
                        title="Javascrip3"
                        className="embed-responsive-item videosRuta"
                        src="https://www.youtube.com/embed/EbMi1Qj4rVE"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <p className='col-12 col-md-5 d-inline d-inline p-2 bg-primary text-white'>5. Javascript Master Duración: 9:23 hrs</p>

                </div>

                <div
                    className="col-12 col-md-5 embed-responsive embed-responsive-16by9"
                    data-aos="fade-up-left"
                >
                    <iframe
                        title="Boostrap"
                        className="embed-responsive-item videosRuta"
                        src="https://www.youtube.com/embed/7s1RjItUBqU"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <p className='col-12 col-md-5 d-inline d-inline p-2 bg-primary text-white'>6. Boostrap4 lista de reproduccion</p>
                </div>
            </div>

            <div className="row">
                <div
                    className="col-12"
                    data-aos="fade-up-right"
                >
                    <a href="https://www.udemy.com/share/103dsU3@eS6pMk287eFjGmwapTNTjDmKHtil1sbIwJ4xBUtMXoePOHUOpv_G_GF5ZD3kChWjZg==/">
                        <img
                            className="embed-responsive-item videosRuta img-fluid"
                            src={react1} alt="" />
                    </a>
                    <p className='d-inline p-2 bg-primary text-white'>7. React de cero a experto Duración: 49:00 hrs</p>
                </div>
<hr />
                <div
                    className="col-12 mt-4"
                    data-aos="fade-up-left"
                >
                    <a href="https://www.udemy.com/share/105pzM3@E5iLo5aBNVLH10KBZxpAFxNgl4_DIMAuTmSj7TB4OEBX43m-RpwEFleFOZNd9iN7Pw==/">
                        <img
                            className="embed-responsive-item videosRuta img-fluid"
                            src={react2} alt="" />
                    </a>
                    <p className='d-inline p-2 bg-primary text-white'>8. React PRO Duración: 27:00 hrs</p>

                </div>
            </div> */}


        </div>
    )
};
