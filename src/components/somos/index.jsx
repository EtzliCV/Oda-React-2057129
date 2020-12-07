import "./somos.css";
import personas from "../../assets/img/3personas.png";
function Somos() {
  return (
    <section className="BGpink">
      <div className="container2 text-white">
        <img
          src={personas}
          className="img-fluid2 photoQS"
          width="750"
          alt="BannerQS"
        />
        <div class="textoQS">
          <h4 className="tituloW">¿Quiénes somos?</h4>
          <p>
            Oda es la iniciativa de un grupo de amigas con diferentes estilos y
            ritmos de vida. Buscando enseñar la magia y emoción del baile;
            Queremos aportar de forma virtual un aprendizaje divertido y
            dinámico en el mundo de la danza.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Somos;
