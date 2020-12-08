import "./home2.css"
import chica from "../../assets/img/chica.png";

function Home2() {
  return (
    <section className="BGgradient py-3">
      <section className="container d-flex justify-content-between align-items-center flex-wrap">
        <aside className="col-lg-5 col-md-5 col-sm-12 textoHome">
          <h1 className="tituloH text-white">
            Baile, <br />
            movimiento <br />
            de vida
          </h1>
          <a href="https://app-vlc.hotmart.com/signup">
            <button type="button" className="btn btn-outline-light mt-3 botonW">
              Aprende aquí
            </button>
          </a>
        </aside>
        <aside className="col-lg-5 col-md-6 col-sm-12">
          <div>
            <img src={chica} alt="ChicaHome" className="img-fluid" />
          </div>
        </aside>
      </section>
    </section>
  );
}

export default Home2;
