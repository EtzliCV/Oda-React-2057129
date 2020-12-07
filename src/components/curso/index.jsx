import { Link } from "react-router-dom";

import "./curso.css";
import salsa from "../../assets/img/salsa.png";
import bachata from "../../assets/img/bachata.png";
import merengue from "../../assets/img/merengue.png";
import afrodance from "../../assets/img/afrodance.png";
import hiphop from "../../assets/img/hiphop.png";
import reggaeton from "../../assets/img/reggaeton.png";
import dancehall from "../../assets/img/dancehall.png";
import commercial from "../../assets/img/commercial.png";

function Curso() {
  return (
    <section className="curso pt-4 pb-5">
      <div className="container text-center">
        <h4 className="tituloA pb-2">Aprende</h4>
        <p className="textoA mb-3">
          ¡Clases de baile desde casa! En ODA te mostramos los mejores vídeos
          paso <br />a paso para que tengas la oportunidad de formarte con los
          mejores.
        </p>
        <ul className="iconos1 row">
          <li className="mx-4">
            <div>
              <Link to="salsa">
                <img src={salsa} width="150" />
              </Link>
            </div>
          </li>
          <li className="mx-4">
            <div>
              <Link to="bachata">
                <img src={bachata} width="150" />
              </Link>
            </div>
          </li>
          <li className="mx-4">
            <div>
              <Link to="merengue">
                <img src={merengue} width="150" />
              </Link>
            </div>
          </li>
          <li className="mx-4">
            <div>
              <Link to="/afrodance">
                <img src={afrodance} width="150" />
              </Link>
            </div>
          </li>
        </ul>
        <ul className="iconos1 row">
          <li className="mx-4">
            <div>
              <Link to="hiphop">
                <img src={hiphop} width="150" />
              </Link>
            </div>
          </li>
          <li className="mx-4">
            <div>
              <Link to="reggaeton">
                <img src={reggaeton} width="150" />
              </Link>
            </div>
          </li>
          <li className="mx-4">
            <div>
              <Link to="dancehall">
                <img src={dancehall} width="150" />
              </Link>
            </div>
          </li>
          <li className="mx-4">
            <div>
              <Link to="commercial">
                <img src={commercial} width="150" />
              </Link>
            </div>
          </li>
        </ul>
        <a href="https://app-vlc.hotmart.com/signup">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 my-2 boton"
          >
            Conoce más
          </button>
        </a>
      </div>
    </section>
  );
}

export default Curso;
