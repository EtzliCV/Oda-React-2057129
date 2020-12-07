import { Link } from "react-router-dom";

import "./salsa.css";
import LogoSalsa from "../../assets/img/logo.png";

function Salsa() {
  return (
    <section className="fondo col-sm-12 col-md-12 col-lg-12 py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-12 col-lg-12 px-5">
          <Link to="/">
            <img src={LogoSalsa} width="100" alt="ODA_Logo" />
          </Link>
          <article className="text-white text-center">
            <h2 className="tituloW">Salsa</h2>
            <p className="py-3">
              El género musical bailable de las síntesis del son cubano, y otros
              géneros de música caribeña, con el jazz y otros ritmos
              estadounidenses. Su ritmo utiliza como base el patrón rítmico del
              son cubano, con clave de son en dos compases de 4/4, o sea 8
              tiempos.
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

export default Salsa;
