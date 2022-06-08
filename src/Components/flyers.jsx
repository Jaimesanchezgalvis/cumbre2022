import React from 'react'
import Headerflyers from './headerflyers';
import Flyerfinal from './flyerfinal';
import "./flyers.css"
import "./button.css"
import { uuid } from 'uuidv4';
import data from '../assets/data/oradores.json'
// import Opciones from './Opciones';


// const data = [

//     {
//         id: uuid(),
//         nombre: "Myriam de la Sierra",
//         posicion: "Senior Vicepresidente & COC",
//         avatar: "assets/oradores/myriam.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Manu Darrocha",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/manu.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Alex Rew",
//         posicion: "Vicepresidente Regional Platinum",
//         avatar: "assets/oradores/alexrew.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Mariano Solano",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/mariano.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Georgina Ferrón Arruzazabala",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/georgina.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Borja Rew",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/borja.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Miky Palacios",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/miki.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Céline Bordenave",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores//celine.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Pepi Morejón Rodriguez",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/pepi.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Adamo Membrives",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Adamo_Membrives_2.jpg"
//     },
//     {
//         id: uuid(),
//         nombre: "Adolfo Matute",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/ADOLFO_Matute.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Adrian Mier",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Adrian_Mier.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Alejandro Viadero",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Alejandro_Viadero.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Andres Gonzalez",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Andres_Gonzalez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Angels Matas",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Angels_Matas.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Antonio Jesus Sanchez",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Antonio_Jesus_Sanchez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Aritza Bengoetxea",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Aritza_Bengoetxea.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Arnold Marin",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Arnold_Marin.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Arrate Revilla",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Arrate_Revilla.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Art Napolitano",
//         posicion: "Senior Vicepresidente & COC",
//         avatar: "assets/oradores/Oradores/ART 2.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Arturo_Hidalgo",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Arturo_Hidalgo.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Bash Bokhari",
//         posicion: "Senior Vicepresidente & COC",
//         avatar: "assets/oradores/Oradores/Bash.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Bea Perez",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Bea_Perez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Cristina Campos",
//         posicion: "Vicepresidenta Regional",
//         avatar: "assets/oradores/Oradores/Cristina_Campos.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Cristina Pozuelo",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Cristina_Pozuelo.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Dani Volonino",
//         posicion: "Senior Vicepresidente &COC",
//         avatar: "assets/oradores/Oradores/Dani_Volonino.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Daniel Calle",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/DANIEL_Calle.png"
//     },
//     {
//         id: uuid(),
//         nombre: "David Pindado",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/David_Pindado.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Edgar Perez",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Edgar_Perez_PNG.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Eduardo Lopez",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Eduardo_Lopez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Eduardo Perez",
//         posicion: "Director General",
//         avatar: "assets/oradores/Oradores/Eduardo_Perez_2021.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Efrain Giraldo",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Efrain_Giraldo.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Elsa Armas",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Elsa_Armas.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Fernando Ezquerra",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Fernando_Ezquerra.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Francisco Torres",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Francisco_Torres.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Gabriela Suarez",
//         posicion: "Vicepresidenta Regional",
//         avatar: "assets/oradores/Oradores/Gabriela_Suarez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Georgina Ferron",
//         posicion: "Vicepresidenta Regional",
//         avatar: "assets/oradores/Oradores/Georgina_Ferron.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Greg Provenzano",
//         posicion: "Presidente & co-fundador de ACN",
//         avatar: "assets/oradores/Oradores/Greg.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Hector Seguin",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Hector_Seguin.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Iker Yurrebaso",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Iker_Yurrebaso.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Ines_Volonino",
//         posicion: "Senior Vicepresidente & COC",
//         avatar: "assets/oradores/Oradores/Ines_Volonino.jpg"
//     },
//     {
//         id: uuid(),
//         nombre: "Ion Ander Otaolea",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Ion_Ander_Otaolea.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Isaac Cardona",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Isaac_Cardona.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Isabel_Girol",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Isabel_Girol.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Jaime Sanchez Galvis",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Jaime_Sanchez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "James Adlam",
//         posicion: "Senior Vicepresidente & COC",
//         avatar: "assets/oradores/Oradores/James_Adlam.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Javier Galeote",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Javier_Galeote.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Javier Garcia",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Javier_Garcia.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Javier Toledano",
//         posicion: "National Key AcconutManager",
//         avatar: "assets/oradores/Oradores/Javier_Toledano.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Javier Torroglosa",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Javier_Torroglosa.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Jesus Gomez",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/JESUS_GOMEZ.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Jinsop Echevarria",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Jinsop_Echevarria.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Joao Paulo Reis",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Joao_Paulo_Reis.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Jose Meseguer",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Jose_Meseguer.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Juan Carlos Justel",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Juan_Carlos_JUSTEL.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Juan Luis Rodriguez",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Juan_Luis_Rodriguez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Juan Manuel Gomez",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Juan_Manuel_Gomez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Juan Ortin",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Juan_Ortin.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Larry Raskin",
//         posicion: "Vicepresidente Global de Lidezgo y Desarrollo",
//         avatar: "assets/oradores/Oradores/Larry Raskin.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Lucia Soriano",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Lucia_Soriano.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Luis Daniel Camilo",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Luis_Daniel_Camilo.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Mafe Calcines",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Mafe_Calcines.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Manel Lazaro",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Manel_Lazaro.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Marcos Carrillo",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Marcos_Carrillo.png"
//     },
//     {
//         id: uuid(),
//         nombre: "María Saiz",
//         posicion: "National Key Acconut Manager",
//         avatar: "assets/oradores/Oradores/María Saiz BIBE.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Martha Angélica_Salinas",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Martha_Angélica_Salinas.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Miguel Rocha",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Miguel_Rocha.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Mike Cupiz",
//         posicion: "VicePresidente & coavatar:-fundador de ACN",
//         avatar: "assets/oradores/Oradores/Mike ok.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Oier Yurrebaso",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Oier_Yurrebaso.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Omar Ahumada",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/OMAR_Ahumada.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Pablo Luguera",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Pablo_Luguera.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Patri Jimenez",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Patri_Jimenez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Patrick_Llopis",
//         posicion: "Vicepres: idente Regional",
//         avatar: "assets/oradores/Oradores/Patrick_Llopis.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Pepa Frigolet",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Pepa_Frigolet.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Pepe Salort",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Pepe_Salort.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Pepi Díaz",
//         posicion: "Vicepresidenta Regional",
//         avatar: "assets/oradores/Oradores/Pepi Diaz.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Ramon Casate",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Ramon_Casate.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Raquel Santana",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Raquel_Santana.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Richard Rew",
//         posicion: "Senior Vicepresidente",
//         avatar: "assets/oradores/Oradores/Richard_Rew.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Rita Rodriguez",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Rita_Rodriguez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Rocío Gutierrez",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Rocío_Gutierrez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Santiago Cassino",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Santi_Cassino.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Sara duran",
//         posicion: "Directora Regional",
//         avatar: "assets/oradores/Oradores/Sara_duran.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Sergio Ortega",
//         posicion: "Vicepresidente Regional",
//         avatar: "assets/oradores/Oradores/Sergio_Ortega.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Soufyane Messouci",
//         posicion: "Country Manager",
//         avatar: "assets/oradores/Oradores/Soufyane_Messouci.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Steven Obando",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Steven_Obando.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Victor Vazquez",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Victor_Vazquez.png"
//     },
//     {
//         id: uuid(),
//         nombre: "Yago Uribe",
//         posicion: "Director Regional",
//         avatar: "assets/oradores/Oradores/Yago_Uribe.png"
//     },

// ];

function flyers() {
    return (
        <div>
            <Headerflyers evento="¿Que tipo de flyer quieres hacer?"/>
        </div>
    )
}

export default flyers
