import {Link} from "react-router-dom"
import "./reggaeton.css"
import LogoRegga from "../../assets/img/logo.png";

function Reggaeton(){
    return(
    <section className="regga col-sm-12 col-md-12 col-lg-12 py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-12 col-lg-12 px-5">
          <Link to ="/"><img src={LogoRegga} width="100" alt="ODA_Logo"/></Link >
          <article className="text-white text-center">
            <h2 className="tituloW">Reggaeton</h2>
            <p className="py-3">
            Este es un género que tiene sus raíces en el Reggae, cuando los obreros afro panameños que construían el canal de panamá seguían la cultura Rastafarí, escuchan cintas de reggae y las traducían a español.
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

export default Reggaeton;