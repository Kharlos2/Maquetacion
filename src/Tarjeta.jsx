

const Tarjeta = (props) => {
    return (
        <div className="contenidoTarjeta">
            <img src={props.info} alt="luffy" />
            <section className="parrafo">
                {props.texto}
            </section>
        </div>
    );
};

export default Tarjeta;