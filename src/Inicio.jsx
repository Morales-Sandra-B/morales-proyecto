import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Header = () => <header style={{ background: '#09b67a', padding: '10px', color: '#ffffff', fontFamily: 'serif', fontSize: '52px' }}>Cinemateca Boliviana</header>;

const Menu = () => (
    <nav style={{ background: '#eee', padding: '10px', }}>
        <Link to="/"><a href="/" style={{ margin: '0 15px', textDecoration: 'none', color: '#00813f', fontWeight: 'bold', fontSize: '18px', }}>Principal</a></Link> |
        <Link to="/peliculas"><a href="/peliculas" style={{ margin: '0 15px', textDecoration: 'none', color: '#00813f', fontWeight: 'bold', fontSize: '18px', }}>Películas</a></Link>
    </nav>
);

const Footer = () => (
    <footer style={{ background: '#00813f', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{color: '#ffffff'}}>Nombre: Morales Escobar Sandra Belen</span>
        <span style={{color: '#ffffff'}}>Publicidad: Programación Web II </span>
    </footer>
);
const Cartilla = ({ imagen, titulo, info }) => (
    <div style={{ textAlign: 'center', width: '150px' }}>
        <img src={imagen} alt={titulo} style={{ width: '200px', height: '200px', borderRadius: '50%' }}/>
        <h4 style={{ fontFamily: 'monospace', fontSize: '18px' }}>{titulo}</h4>
        <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#555' }}>{info}</p>
    </div>
);
const Principal = () => (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
        <Cartilla
            imagen="/Morgan-Freeman.jpg"
            titulo="Morgan Freeman"
            info="Morgan Porterfield Freeman Jr.​, conocido como Morgan Freeman, es un actor y documentalista estadounidense, ganador del premio Óscar al mejor actor de reparto en 2005 por la película Million Dollar Baby."
        />
        <Cartilla
            imagen="/queen-.jpg"
            titulo="Queen Latifah"
            info="Dana Elaine Owens, más conocida por su nombre artístico Queen Latifah, es una cantante, rapera y actriz estadounidense. Su trabajo en la música, televisión y cine le ha merecido un Grammy y otras cinco nominaciones a estos premios, una nominación a un Emmy y una nominación al Óscar a la Mejor actriz de reparto."
        />
        <Cartilla
            imagen="/Robin-Williams.jpg"
            titulo="Robin Williams"
            info="Robin McLaurin Williams ​​fue un comediante, actor y actor de voz estadounidense. Ganador de un premio Óscar, cinco Globos de Oro, un premio del Sindicato de Actores, dos premios Emmy y tres premios Grammy. Fue conocido sobre todo por sus actuaciones en películas cómicas tales como Mrs."
        />
    </div>
);

const Peliculas = () => {
    const peliculas = [
        {
            num: 1,
            resumen: "El viaje de Chihiro: La historia sigue a Chihiro Ogino, una niña de 10 años que, mientras se muda a un nuevo hogar con sus padres, entra por accidente a un misterioso mundo espiritual. Sus padres, tras comer en un restaurante sin permiso, se transforman en cerdos por una bruja llamada Yubaba, quien gobierna un gigantesco baño termal para dioses y espíritus.Para salvarlos, Chihiro debe trabajar en los baños y aceptar un contrato con Yubaba, quien le roba su nombre y la rebautiza como Sen. Con la ayuda de un joven misterioso llamado Haku, Chihiro atraviesa muchas pruebas, conoce criaturas mágicas como el Sin Cara, y aprende a ser valiente, ingeniosa y compasiva.",
            imagen: "/chihiro.jpg"
        },
        {
            num: 2,
            resumen: "Buscando a Nemo: La historia comienza con Marlin, un pez payaso muy protector, que pierde a su esposa y a casi todos sus huevos en un ataque. Solo sobrevive un hijo: Nemo, que tiene una aleta más pequeña de lo normal. Debido al trauma, Marlin es extremadamente cuidadoso con Nemo. El primer día de escuela, Nemo desobedece a su padre y es capturado por un buzo, terminando en una pecera en la oficina de un dentista en Sídney, Australia. Marlin, desesperado por recuperar a su hijo, se lanza al océano para buscarlo. En el camino, se une a Dory, una pez cirujano azul con pérdida de memoria a corto plazo. Juntos viven muchas aventuras: enfrentan tiburones, medusas, corrientes marinas y ballenas. Mientras tanto, Nemo planea escapar de la pecera con la ayuda de los otros peces cautivos.",
            imagen: "/nemo.jpg"
        },
        {
            num: 3,
            resumen: "Avatar: La historia sigue a Jake Sully, un ex-marine parapléjico que es enviado al planeta Pandora, un mundo exuberante habitado por una especie humanoide llamada los Na'vi. Jake participa en el programa Avatar, que le permite controlar un cuerpo Na'vi generado artificialmente para interactuar con los habitantes nativos. La empresa humana RDA está en Pandora para extraer un mineral valioso llamado unobtainium, pero sus operaciones amenazan el hogar sagrado de los Na'vi. Jake es enviado para ganarse su confianza, pero al convivir con ellos y enamorarse de Neytiri, una mujer Na'vi, comienza a cuestionar sus órdenes. Finalmente, Jake se pone del lado de los Na'vi y lidera una rebelión contra los humanos para defender Pandora. En una épica batalla, los Na'vi triunfan, y Jake decide quedarse permanentemente en su cuerpo avatar.",
            imagen: "/avatar.jpg"
        },
        {
            num: 4,
            resumen: "Up, Una aventura de altura: La historia comienza con Carl Fredricksen, un anciano viudo que ha vivido una vida tranquila tras la muerte de su esposa Ellie. De jóvenes, ambos soñaban con viajar a las Cataratas del Paraíso en Sudamérica, pero nunca pudieron hacerlo. Cuando Carl está a punto de perder su casa por una orden de desalojo, decide cumplir su promesa: ata miles de globos a su casa y se lanza al aire para volar hasta las Cataratas del Paraíso. Sin saberlo, a bordo viaja Russell, un niño explorador optimista y charlatán que solo quiere ganar su última medalla ayudando a un anciano. Durante el viaje, se encuentran con personajes inesperados: Kevin, un ave tropical gigante, y Dug, un perro que habla mediante un collar traductor. En la jungla descubren que el héroe de infancia de Carl, el explorador Charles Muntz, se ha convertido en un villano obsesionado con capturar a Kevin. Carl debe decidir entre aferrarse a su pasado o abrirse a nuevas aventuras y personas. Al final, aprende que el verdadero viaje de su vida fue el que vivió con Ellie, y encuentra una nueva familia junto a Russell, Dug y Kevin.",
            imagen: "/up.jpg"
        },
        {
            num: 5,
            resumen: "Toy Story: La historia se centra en Woody, un vaquero de juguete que es el favorito de Andy, un niño que juega con sus juguetes sin saber que, cuando él no está, los juguetes cobran vida. Todo cambia cuando Andy recibe un nuevo juguete: Buzz Lightyear, un moderno guardián espacial que no se da cuenta de que es un juguete. Buzz se vuelve rápidamente el favorito de Andy, lo que genera celos en Woody. Por accidente, Buzz y Woody terminan fuera de casa y deben trabajar juntos para regresar con Andy antes de que la familia se mude. En el camino enfrentan muchos desafíos, incluyendo al cruel vecino Sid, que destruye juguetes por diversión. A pesar de sus diferencias, Woody y Buzz desarrollan una amistad verdadera y logran regresar justo a tiempo. Woody aprende a aceptar que el cariño de Andy puede compartirse, y Buzz acepta su identidad como juguete.",
            imagen: "/toy.jpg"
        },
    ];

    const mostrarResumen = (resumen) => {
        alert(resumen);
    };

    const botonEstilo = {
        backgroundColor: "#2ecc71",
        color: "white",
        border: "none",
        padding: "10px 20px",
        margin: "10px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
        transition: "background-color 0.3s ease",
    };

    const botonHover = {
        backgroundColor: "#27ae60",
    };

    return (
        <div style={{ margin: "20px", display: "flex", flexDirection: "row", justifyContent: "center", gap: "40px", flexWrap: "wrap"  }}>
            {peliculas.map((peli) => (
                <div key={peli.num} style={{ textAlign: "center" }}>
                    <img
                        src={peli.imagen} 
                        alt={`Película ${peli.num}`} 
                        style={{ width: "200px", height: "250px ", borderRadius: "8px" }} 
                    />
                    <br />
                    <button
                        onClick={() => mostrarResumen(peli.resumen)}
                        style={botonEstilo}
                        onMouseOver={(e) => (e.target.style.backgroundColor = botonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = botonEstilo.backgroundColor)}
                    >
                        🎬 resumen 
                    </button>
                </div>
            ))}
        </div>
    );
};



const Inicio = () => (
    <Router>
        <Header />
        <Menu />
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
        <Footer />
    </Router>
);

export default Inicio;