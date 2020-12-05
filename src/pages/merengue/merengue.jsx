import {Link} from "react-router-dom"
import "./merengue.css"
import LogoMerengue from "../../assets/img/logo.png";

function Merengue (){
    return(
    <section className="merengue col-sm-12 col-md-12 col-lg-12 py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-12 col-lg-12 px-5">
          <Link to ="/"><img src={LogoMerengue} width="100" alt="ODA_Logo"/></Link >
          <article className="text-white text-center">
            <h2 className="tituloW">Merengue</h2>
            <p className="py-3">
            Una de las personas más importantes en el desarrollo del Merengue fue el dictador Rafael Leonidas Trujillo.En su dictadura el Merengue fue asociado con las personas del Cambo y las regiones rurales. En 1918 se intento ampliar la popularidad del Merengue en las clases altas de mano de Juna Francisca García; pero fue rechazado ampliando más la brecha con las clases sociales.
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

export default Merengue;