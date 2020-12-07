import { Link } from "react-router-dom";

import "./bachata.css";
import LogoBachata from "../../assets/img/logo.png";

function Bachata() {
  return (
    <section className="bachata col-sm-12 col-md-12 col-lg-12 py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <div class="col-sm-12 col-md-12 col-lg-12 px-5">
          <Link to="/">
            <img src={LogoBachata} width="100" alt="ODA_Logo" />
          </Link>
          <article className="text-white text-center">
            <h2 className="tituloW">Bachata</h2>
            <p className="py-3">
              La Bachata es un baile de pareja característico por los
              movimientos de cadera laterales. La Bachata es un magnífico baile
              que ha tendio diferentes influencias y ha provocado que poco a
              poco su evolución.
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

export default Bachata;
