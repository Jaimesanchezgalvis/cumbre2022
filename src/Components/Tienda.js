import React, { useState } from 'react';
import '../Components/Styles.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { AiFillStar, AiOutlineLine } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.gif';
import perfil from '../assets/Perfil.jpg';
import tienda_online from '../assets/Tienda_Online.jpg';
import tienda_operativa from '../assets/Tienda_operativa.jpg';
import { MDBGallery, MDBGalleryList, MDBMask, MDBBox } from 'mdbreact';
import Button from './Button';
import "bootstrap/scss/bootstrap.scss";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import data from "../assets/data/oradores.json";
import Select from 'react-select'

console.log(data);

const Tienda = () => {
    const [startDate, setStartDate] = useState("");
    const [oradorstate, setOradorstate] = useState("");
    const [oradorimgstate, setOradorimgstate] = useState("");
    // useEffect(() => {
    //     Aos.init();
    // }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    {/* <div className="col-12 col-md-6">
                        <img src={banner} className="img-fluid" alt="foto de perfil" data-aos="fade-down-left" />
                    </div> */}
                    {/* <div className="col-12">
                        <h2>Oportunidades</h2>
                    </div> */}
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
                <div className="row tipoFlyer" >
                    <h4>Que tipo de flyer quieres crear?</h4>
                </div>

                <div className="row botones">
                    <Button >Formacion especial</Button>
                    <Button >Presentacion de negocio</Button>
                    <Button >Entrenamiento semanal</Button>
                </div>
                <div className="row opciones">
                    <div className="row">
                        <div className="col-6">
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat='dd/MM' placeholderText='fecha' />
                        </div>
                        <div className="col-6">
                            <select name="oradores" className="custom-select oradores" required 
                                
                                onChange={(e) => {
                                    const selectedOrador = e.target.value;
                                    setOradorstate(selectedOrador)
                                    // const imgOrador = e.target.id;
                                    // setOradorimgstate(imgOrador)
                                    }}>
                                <option value="Orador">Orador</option>
                                <option value="Alex Rew" id="png"
                                onChange={(e)=>{
                                    const imgOrador = e.target.id;
                                    setOradorimgstate(imgOrador)
                                }}>Alex Rew</option>
                                <option value="bash">Bash Bokhari</option>
                                <option value="myriam">Myriam de la sierra</option>
                                <option value="borja">Borja Rew</option>
                                <option value="georgina">Georgina Ferron</option>
                                <option value="jaime">Jaime Sanchez</option>
                                <option value="manu">Manu Darrocha</option>
                            </select>
                        </div>


                    </div>
                </div>
                    <div className="row">
                            {oradorstate}
                            {oradorimgstate}
                            
                        <div className="col-12" >
                            <img src={require('../assets/oradores/bash.png')} alt="" />
                        </div>
                    </div>
                <div className="row">
                    <div className="col-6">
                        {data.oradores.map(orador => (
                            <select name="" id="">
                                <option value="">
                                    <h5>${orador.precio}</h5>
                                </option>
                            <Link to={`oradores/orador/` + orador.ref} >
                                {/* <div className="containerreconocimiento--interno">
                                    <img src={require(`../assets/oradores/${orador.img}`)}></img>
                                </div> */}
                                <h5>${orador.precio}</h5>
                            </Link>
                                
                                </select>
                            
                        ))}
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
};




// function Gallery() {
//     const dataImg = [
//         {
//             img:
//                 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
//             cols: 1,
//             title: 'image',
//             pattern: 1
//         },
//         {
//             img:
//                 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
//             cols: 2,
//             title: 'image',
//             pattern: 2
//         },
//         {
//             img:
//                 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg',
//             cols: 1,
//             title: 'image',
//             pattern: 3
//         },
//         {
//             img:
//                 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg',
//             cols: 2,
//             title: 'image',
//             pattern: 4
//         },
//         {
//             img:
//                 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg',
//             cols: 2,
//             title: 'image',
//             pattern: 5,
//         },

//         {
//             img:
//                 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg',
//             cols: 1,
//             title: 'image',
//             pattern: 6
//         },
//         {
//             img:
//                 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg',
//             cols: 2,
//             title: 'image',
//             pattern: 7
//         },
//         {
//             img:
//                 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg',
//             cols: 1,
//             title: 'image',
//             pattern: 8
//         }
//     ];

//     return (
//         <MDBGallery cols={4}>
//             {dataImg.map(({ cols, img, title, pattern }, i) => {
//                 return (
//                     <MDBGalleryList key={i} cols={cols || 1} rows={2} titleClasses='view'>
//                         <img src={img} alt={title} />
//                         <MDBMask pattern={pattern} className='flex-center'>
//                             <MDBBox
//                                 tag='p'
//                                 color='white'
//                                 style={{
//                                     position: 'absolute',
//                                     top: '50%'
//                                 }}
//                             >
//                                 With masks pattern {i + 1}
//                             </MDBBox>
//                         </MDBMask>
//                     </MDBGalleryList>
//                 );
//             })}
//         </MDBGallery>
//     );
// }

export default Tienda

