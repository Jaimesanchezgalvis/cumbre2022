import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#2C3E50" }}>
        <div className="contenedornav">
          <div className="contenedornav--logosiz">
            <Link
              to="/"
              className="contenedornav-logo"
              onClick={closeMobileMenu}
            >
              <HiOutlineSpeakerphone className="contenedornav-icon" />
              Cumbre 2022
            </Link>
          </div>

          <div className="contenedornav--iconomenu" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <div className="contenedornav--container">
            <ul
              className={
                click
                  ? "contenedornav--nav-menu active"
                  : "contenedornav--nav-menu"
              }
            >
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <h4>Home</h4>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/ruta"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <h4>Lideres Nacionales</h4>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/reconocimiento"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <h4>Formulario de Registro</h4>
                </Link>
              </li>
{/* 
              <li className="nav-item">
                <Link
                  to="/Acercademi"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <h4>Separa tu entrada</h4>
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link
                  to="/proyectos"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <h4>Proyectos</h4>
                </Link>
              </li> */}

              <li className="nav-btn">
                {button ? (
                  <Link to="/Contactame" className="btn-link">
                    <Button buttonStyle="btn--outline">Contactanos</Button>
                  </Link>
                ) : (
                  <Link to="/Contactame" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Pre-Registro
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;