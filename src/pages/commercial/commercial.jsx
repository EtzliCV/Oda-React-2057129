import { Link } from "react-router-dom";
import "./commercial.css";
import LogoCommercial from "../../assets/img/logo.png";

function Commercial() {
  return (
    <section className="commercial col-sm-12 col-md-12 col-lg-12 py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-12 col-lg-12 px-5">
          <Link to="/">
            <img src={LogoCommercial} width="100" alt="ODA_Logo" />
          </Link>
          <article className="text-white text-center">
            <h2 className="tituloW">Commercial Dance</h2>
            <p className="py-3">
              Esta modalidad de baile es el resultado de la introducción y
              adaptación de la cultura urbana en la industria musical pop y en
              los grandes espectáculos. Muy dinámico y buscando siempre una
              finalidad estética y espectacular, se refiere a estilos de
              coreografías creadas para artistas pop y se podrían definir como
              una mezcla de cualquier estilo de danza, donde el enfoque está
              puesto en la actitud de sus protagonistas.
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

export default Commercial;
