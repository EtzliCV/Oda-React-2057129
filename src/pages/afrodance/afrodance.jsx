import { Link } from "react-router-dom";

import "./afrodance.css";
import logoAfro from "../../assets/img/logo.png";

function Afrodance() {
  return (
    <section className="afro col-sm-12 col-md-12 col-lg-12 py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-12 col-lg-12 px-5">
          <Link to="/">
            <img src={logoAfro} width="100" alt="ODA_Logo" />
          </Link>
          <article className="text-white text-center">
            <h2 className="tituloW">AfroDance</h2>
            <p className="py-3">
              Hace referencia principal a la danza Surafricana, danza del sur de
              Sahara y numerosos tipos de danzas africanas. Producto de las
              numerosas diferencias culturales en los estilos musicales y de
              movimiento. Producto de la unión de estas culturas más la
              influencia occidental.
            </p>
            <a href="https://app-vlc.hotmart.com/signup">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 my-2 boton"
              >
                Prueba Aquí
              </button>
            </a>
          </article>
        </div>
      </header>
    </section>
  );
}

export default Afrodance;
