import "./hotmart.css";
import boton from "../../assets/img/boton3.png";
import hotmart from "../../assets/img/hotmart.png";

function Hotmart() {
  return (
    <section className="hotamrt">
      <div className="container3 text-white">
        <div className="textoH d-flex flex-wrap">
          <h4 className="mt-4 tituloW">Hotmart</h4>
          <p>
            Es la plataforma de aprendizaje a distancia más grande y completa de
            América Latina. Allí encontrarás nuestro curso y todas las
            estrategias del equipo de ODA en enseñanza de baile.
          </p>
          <a href="https://app-vlc.hotmart.com/signup">
            <button
              type="button"
              className="d-flex align-items-center btn btn-outline-light botonW BtnHM"
            >
              <img src={boton} width="25" />
              <div className="mx-2">Aprende aquí</div>
            </button>
          </a>
        </div>
        <img src={hotmart} width="750" class="photoH" alt="BannerHM" />
      </div>
    </section>
  );
}

export default Hotmart;
