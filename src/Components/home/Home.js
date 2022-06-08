import React, { useEffect } from "react";
import cumbre from "../../assets/cumbre.jpg";
import { AiFillStar, AiOutlineLine } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "bootstrap/scss/bootstrap.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

import "../../Components/Styles.scss";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <a href="#/reconocimiento">
              <img
                src={cumbre}
                className="img-fluid"
                alt="Responsive"
                data-aos="fade-down-left"
              ></img>
            </a>
          </div>

          <div className="col-12 col-md-12">
            <hr />
            <h4>Llego la hora de nuestra cumbre Colombia</h4>
          </div>

          <div className="col-12">
            <IconContext.Provider value={{ color: "#2C3E50" }}>
              {/* <AiOutlineLine className="iconoline" data-aos="fade-up-left" /> */}
              {/* <AiFillStar className="iconostart" data-aos="zoom-in" /> */}
              {/* <AiOutlineLine className="iconoline" data-aos="fade-up-right" /> */}
              {/* <a className="arrow-frontr" data-aos="fade-up-left"> */}
              {/* <Link to="/reconocimiento"> */}
              {/* <MdKeyboardArrowRight /> */}
              {/* </Link> */}
              {/* </a> */}
            </IconContext.Provider>
          </div>

          <div className="col-12" data-aos="fade-up-right">
            <h2>Iniciamos preventa</h2>
            <h4>Tendremos Aforo limitado</h4>
          </div>
        </div>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCumbre-Colombia-2022-111227438280192%2Fshop%2F%3Freferral_code%3Dpage_shop_tab%26preview%3D1&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
