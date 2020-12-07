import { Link } from "react-router-dom";

import "./hiphop.css";
import LogoHiphop from "../../assets/img/logo.png";

function HipHop() {
  return (
    <section className="hiphop col-sm-12 col-md-12 col-lg-12 py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-12 col-lg-12 px-5">
          <Link to="/">
            <img src={LogoHiphop} width="100" alt="ODA_Logo" />
          </Link>
          <article className="text-white text-center">
            <h2 className="tituloW">Hip hop</h2>
            <p className="py-3">
              El hip hop comenzó en el Bronx y muchas tendencias pueden
              rastrearse en las arenosas calles de la ciudad de Nueva York en
              los años 70 y 80. Las pandillas callejeras como los Ghetto
              Brothers hicieron al biker un estilo, con chaquetas de mezclilla
              decoradas a su gusto para diferenciarse.
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

export default HipHop;
