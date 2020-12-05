import {Link} from "react-router-dom"
import "./dancehall.css"
import LogoDance from "../../assets/img/logo.png";

function DanceHall(){
    return(
        <section className="danceh col-sm-12 col-md-12 col-lg-12 py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-12 col-lg-12 px-5">
          <Link to ="/"><img src={LogoDance} width="100" alt="ODA_Logo"/></Link >
          <article className="text-white text-center">
            <h2 className="tituloW">Dance Hall</h2>
            <p className="py-3">
            Fenómeno cultural que surgió en Jamaica como una evolución de Reggae y la música proveniente de los SoundSystems. Esto hacían sonar canciones remezcladas cuando aún no existia el concepto de los salones de baile (DanceHalls) pese al término, solían ser al aire libre y frecuentados por las clases populares.

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

export default DanceHall;