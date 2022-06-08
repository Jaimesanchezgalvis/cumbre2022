import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { ImFilePdf } from "react-icons/im";
import Spanishcv from "../../assets/Spanishcv.pdf";
import Englishcv from "../../assets/Englishcv.pdf";

import { Link } from "react-router-dom";

const Contactame = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Redes Sociales:</h3>
          </div>

          <div className="col-6 col-md-3" data-aos="fade-down-left">
            <a
              className="insta"
              href="https://www.instagram.com/jaimesanchezgalvis/"
            >
              <FiInstagram className="iconos fac" />
            </a>
          </div>

          <div className="col-6 col-md-3" data-aos="fade-down-right">
            <a
              className="insta"
              href="https://www.instagram.com/jaimesanchezgalvis/"
            >
              <FiInstagram className="iconos fac" />
            </a>
          </div>
          <div className="col-6 col-md-3" data-aos="fade-down-left">
            <a
              className="insta"
              href="https://www.instagram.com/jaimesanchezgalvis/"
            >
              <FiInstagram className="iconos fac" />
            </a>
          </div>
          <div className="col-6 col-md-3" data-aos="fade-down-right">
            <a
              className="insta"
              href="https://www.instagram.com/jaimesanchezgalvis/"
            >
              <FiInstagram className="iconos fac" />
            </a>
          </div>
          <div className="col-6 col-md-3" data-aos="fade-down-right">
            <a
              className="insta"
              href="https://www.instagram.com/jaimesanchezgalvis/"
            >
              <FiInstagram className="iconos fac" />
            </a>
          </div>
          <div className="col-6 col-md-3" data-aos="fade-down-right">
            <a
              className="insta"
              href="https://www.instagram.com/jaimesanchezgalvis/"
            >
              <FiInstagram className="iconos fac" />
            </a>
          </div>
          <div className="col-6 col-md-3" data-aos="fade-down-right">
            <a
              className="insta"
              href="https://www.instagram.com/jaimesanchezgalvis/"
            >
              <FiInstagram className="iconos fac" />
            </a>
          </div>
          <div className="col-6 col-md-3" data-aos="fade-down-right">
            <a
              className="insta"
              href="https://www.instagram.com/jaimesanchezgalvi/"
            >
              <FiInstagram className="iconos fac" />
            </a>
          </div>
        </div>

        {/* <a className="arrow-frontb" data-aos="fade-up-right" ><Link to="/Acercademi"> <MdKeyboardArrowLeft /></Link></a> */}

        {/* <div className="row" data-aos="fade-up-left">
          <div className="col-12">
            <h4>CVs 2021:</h4>
          </div>

          <div className="col-6 col-md-6">
            <a className="cvs" href={Spanishcv}>
              <ImFilePdf className="iconoscv" />
            </a>
            <p>Español</p>
          </div>
          <div className="col-6 col-md-6">
            <a className="cvs" href={Englishcv}>
              <ImFilePdf className="iconoscv" />
            </a>
            <p>English</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>Jaime Sanchez Galvis</h5>
            <a href="mailto:jaimesanchezgalvis@gmail.com">
              jaimesanchezgalvis@gmail.com
            </a>
            <h6>+34 722 116 357</h6>
          </div>
        </div>
         */}
      </div>
    </>
  );
};

export default Contactame;
