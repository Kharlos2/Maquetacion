

const Tarjeta = ({infosita}) => {
    return (
        <div className="contenidoTarjeta">
            <img src={infosita.imagen} alt="luffy" />
            <section className="parrafo">
                {infosita.texto}
            </section>
        </div>
    );
};

export default Tarjeta;