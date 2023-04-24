import Agregar from "./Agregar";
import Tarjeta from "./Tarjeta";

import luffy from "./assets/img/luffy.jpeg";
import zoro from "./assets/img/zoro.jpg";
import law from "./assets/img/law.jpg";
import shanks from "./assets/img/shanks.avif";


const Contenido = () => {

    const info = {

        imagenUno: luffy,
        textoUno: "Luffy 👍",
        imagenDos: zoro,
        textoDos: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum mollitia ipsum, odio enim possimus voluptatem quasi! Quisquam iusto, explicabo, laboriosam architecto quas quam illo autem earum voluptatibus atque cumque.",
        imagenTres: law,
        textoTres: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum mollitia ipsum, odio enim possimus voluptatem quasi! Quisquam iusto, explicabo, laboriosam architecto quas quam illo autem earum voluptatibus atque cumque.",
        imagenCuatro: shanks,
        textoCuatro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum mollitia ipsum, odio enim possimus voluptatem quasi! Quisquam iusto, explicabo, laboriosam architecto quas quam illo autem earum voluptatibus atque cumque."
 
    }

    return (
        <div className="contenido">
            <section className="agregar">
                <Agregar/>
            </section>
            <section className="tarjetas">
                <Tarjeta info={info.imagenUno} texto={info.textoUno}/>
                <Tarjeta info={info.imagenDos} texto={info.textoDos}/>
                <Tarjeta info={info.imagenTres} texto={info.textoTres}/>
                <Tarjeta info={info.imagenCuatro} texto={info.textoCuatro}/>
            </section>
        </div>
    );
};

export default Contenido;