import React, { useEffect } from 'react';
import '../../Components/Styles.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Jaime2 from '../../assets/Fotoperfil2.jpg';
import { IconContext } from 'react-icons/lib';
import { AiFillStar, AiOutlineLine } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';


document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
});

const Acercademi = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return(
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-6">
                        <img src={Jaime2} className="img-fluid" alt="foto de perfil" data-aos="fade-down-left" />
                    </div>
                    <div className="col-12">
                        <h1>Acerca de mi:</h1>
                    </div>
                    <div className="col-12">
                        <IconContext.Provider value={{ color: '#2C3E50' }}>
                            <a className='arrow-frontb' data-aos="fade-up-right"><Link to="/Reconocimiento"> <MdKeyboardArrowLeft /></Link></a>
                            <AiOutlineLine className="iconoline" data-aos="fade-up-left" />
                            <AiFillStar className="iconostart" data-aos="zoom-in" />
                            <AiOutlineLine className="iconoline" data-aos="fade-up-right" />
                            <a className='arrow-frontr' data-aos="fade-up-left"><Link to="/Contactame"> <MdKeyboardArrowRight /></Link></a>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Primero que todo te quiero agradecer por llegar hasta este punto de la web, la he hecho con mucho cariño pensado en cada detalle, como te podras dar cuenta en la foto es un espacio más personal que me gustaría compartir contigo, así que iniciemos te doy un breve tour.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Estudie ingeniería electrónica al inicio de mi carrera, realicé varios cursos en el ámbito de la electro-medicina, con énfasis en gerencia de proyectos. Actualmente tengo un negocio independiente en el que ofrecemos servicios de telecomunicaciones y energía para Europa, Latinoamérica y Estados unidos.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Viajé a España y sin tener ningún conocimiento del sector comercial y sin tener contactos, empecé a trabajar como independiente expandiendo una franquicia de telecomunicaciones y energía, al liderazgo de equipos y al sistema de trabajo online he alcanzado una de las posiciones más altas de la compañía.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Y ahora en 2020 abro un nuevo capítulo de actualización en mi perfil profesional en una de mis pasiones que es la tecnología. Luego de crear varias páginas web para realizar mi actividad como independiente, decido iniciar un Bootcamp en programación full-stack. </p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Desde siempre tecnología ha sido una de mis pasiones y en el momento vital en el que estamos a nivel global, la única locura es no aprender a programar.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Así que inició este nuevo capítulo de mi vida profesional y personal con muchísimas expectativas y todos los días con más ganas de seguir aprendiendo!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Acercademi;
