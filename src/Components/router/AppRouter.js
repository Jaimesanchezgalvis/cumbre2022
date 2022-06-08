import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Acercademi from '../acercademi/Acercademi';
import Reconocimiento from '../reconocimiento/Reconocimiento';
import proyectos from '../proyectos/proyectos';
import Contactame from '../contactame/Contactame';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { RutaDeConocimiento } from '../rutaDelconocimiento/RutaDeConocimiento';
// import Tienda from './Components/Tienda';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <div className="container-fluid">
                    <Navbar />
                    <Switch>
                        <Route exact path="/contactame" component={Contactame} />
                        <Route exact path="/proyectos" component={proyectos} />
                        <Route exact path="/acercademi" component={Acercademi} />
                        <Route exact path="/reconocimiento" component={Reconocimiento} />
                        <Route exact path="/ruta" component={RutaDeConocimiento} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/" component={Home} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </>
    )
}

