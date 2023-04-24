import Imagen from './Imagen';
import Opciones from "./Opciones";
import SubImagen from './SubImagen';
//imagenes
import abeja from './assets/img/abeja.png';
import corgi from './assets/img/corgi.png';
import dragon from './assets/img/dragon.png';


const Menu = () => {
    
    const imagenes = {

        imagenUno: abeja,
        imagenDos: corgi,
        imagenTres: dragon

    }

    return (
        <div className='menu'>
            <section className="seccion1">
                <Imagen/>
            </section>
            <section className='opciones'>
                <Opciones opciones='MENU'/>
                <Opciones opciones='CONTACTO'/>
                <Opciones opciones='NOSE'/>
            </section>
            <section className='imagen2'>
                <SubImagen imagen={imagenes.imagenUno}/>
                <SubImagen imagen={imagenes.imagenDos}/>
                <SubImagen imagen={imagenes.imagenTres}/>
            </section>
        </div>
    );
};

export default Menu;