import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillStar, AiOutlineLine } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

// import "./Styles.scss";

import "../../Components/Styles.scss";
document.addEventListener("aos:in", ({ detail }) => {
  console.log("animated in", detail);
});

document.addEventListener("aos:out", ({ detail }) => {
  console.log("animated out", detail);
});

const Reconocimiento = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="reconocimiento rotterdam"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/coggEUN_4y4"
              //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              data-aos="fade-down-left"
              allowfullscreen
            ></iframe>
          </div>

          <div className="col-12">
            <h2>Haz tu registro</h2>
          </div>
          {/* <div className="col-12">
                        <IconContext.Provider value={{ color: '#2C3E50' }}>
                            <a className='arrow-frontb' data-aos="fade-up-right"><Link to="/"> <MdKeyboardArrowLeft /></Link></a>
                            <AiOutlineLine className="iconoline" data-aos="fade-up-left" />
                            <AiFillStar className="iconostart" data-aos="zoom-in" />
                            <AiOutlineLine className="iconoline" data-aos="fade-up-right" />
                            <a className='arrow-frontr' data-aos="fade-up-left"><Link to="/Acercademi"> <MdKeyboardArrowRight /></Link></a>
                        </IconContext.Provider>
                    </div> */}
        </div>

        <div className="row" data-aos="fade-up-right">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdh3ei2kcjBp2CBSKWB4_xNCuzBzo9xkKN7Sllflu0vCwgHYQ/viewform?embedded=true"
            width="640"
            height="450"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Cargando…
          </iframe>
        </div>
        {/* <div className="row" data-aos="fade-up-right">
            <p>
              El 2018 fue un gran año después de varios años de enfoque y
              dedicación, alcanzo una posición relevante en la industria de la
              distribución de servicios esenciales, a partir de ese momento
              inicia una carrera de expansión en la que me lleva a trabajar en
              Latinoamérica y Europa.
            </p>
          </div>
          <div className="row" data-aos="fade-up-right">
            <p>
              En el 2017, ocupó el puesto número 1 de producción en España, y el
              puesto número 7 a nivel Europeo, en la construcción de equipos
              para distribución de servicios de telecomunicaciones y energía,
              esto gracias a una estrategia de márquetin online.
            </p>
          </div> */}
      </div>
    </>
  );
};

export default Reconocimiento;
