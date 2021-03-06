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
                        <p>Primero que todo te quiero agradecer por llegar hasta este punto de la web, la he hecho con mucho cari??o pensado en cada detalle, como te podras dar cuenta en la foto es un espacio m??s personal que me gustar??a compartir contigo, as?? que iniciemos te doy un breve tour.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Estudie ingenier??a electr??nica al inicio de mi carrera, realic?? varios cursos en el ??mbito de la electro-medicina, con ??nfasis en gerencia de proyectos. Actualmente tengo un negocio independiente en el que ofrecemos servicios de telecomunicaciones y energ??a para Europa, Latinoam??rica y Estados unidos.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Viaj?? a Espa??a y sin tener ning??n conocimiento del sector comercial y sin tener contactos, empec?? a trabajar como independiente expandiendo una franquicia de telecomunicaciones y energ??a, al liderazgo de equipos y al sistema de trabajo online he alcanzado una de las posiciones m??s altas de la compa????a.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Y ahora en 2020 abro un nuevo cap??tulo de actualizaci??n en mi perfil profesional en una de mis pasiones que es la tecnolog??a. Luego de crear varias p??ginas web para realizar mi actividad como independiente, decido iniciar un Bootcamp en programaci??n full-stack. </p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>Desde siempre tecnolog??a ha sido una de mis pasiones y en el momento vital en el que estamos a nivel global, la ??nica locura es no aprender a programar.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up-right">
                    <div className="col-12">
                        <p>As?? que inici?? este nuevo cap??tulo de mi vida profesional y personal con much??simas expectativas y todos los d??as con m??s ganas de seguir aprendiendo!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Acercademi;
