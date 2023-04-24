import Agregar from "./Agregar";
import Tarjeta from "./Tarjeta";

import luffy from "./assets/img/luffy.jpeg";
import zoro from "./assets/img/zoro.jpg";
import law from "./assets/img/law.jpg";
import shanks from "./assets/img/shanks.avif";


const Contenido = () => {

    const info = [
        {
            imagen: luffy,
            texto: "Luffy 👍"
        },
        {
            imagen: zoro,
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum mollitia ipsum, odio enim possimus voluptatem quasi! Quisquam iusto, explicabo, laboriosam architecto quas quam illo autem earum voluptatibus atque cumque."

        }, 
        {
            imagen: law,
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum mollitia ipsum, odio enim possimus voluptatem quasi! Quisquam iusto, explicabo, laboriosam architecto quas quam illo autem earum voluptatibus atque cumque."
        },
        {
            imagen: shanks,
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum mollitia ipsum, odio enim possimus voluptatem quasi! Quisquam iusto, explicabo, laboriosam architecto quas quam illo autem earum voluptatibus atque cumque."
        }
    ]

    return (
        <div className="contenido">
            <section className="agregar">
                <Agregar/>
            </section>
            <section className="tarjetas">
                {
                    info.map((infosita)=>(
                        <Tarjeta infosita={infosita} />
                    ))
                }
            </section>
        </div>
    );
};

export default Contenido;