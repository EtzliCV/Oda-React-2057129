import "./descubre.css"
import higuita from "../../assets/img/higuita.png";
import natalia from "../../assets/img/natto.png";
import jorge from "../../assets/img/jorge.png";
import esly from "../../assets/img/esly.png";



function Descubre() {
    return(
        <section className="descubre py-4">
      <div className="container text-center">
        <h4 className="tituloA">Descubre</h4>
        <p className="textoA">Las personas que están detrás del equipo ODA.</p>
        <ul className="fundadoras d-flex align-items-center flex-wrap pt-3">
          <li className="mx-4">
            <div className="nosotras">
              <img src={higuita} width="150" alt="LH" />
            </div>
            <h5 className="nombre">Laura Higuita</h5>
          </li>
          <li className="mx-4">
            <div className="nosotras">
              <img src={natalia} width="150" alt="NR" />
            </div>
            <h5 className="nombre">Natalia Restrepo</h5>
          </li>
          <li className="mx-4">
            <div className="nosotras">
              <img src={jorge} width="150" alt="MJ" />
            </div>
            <h5 className="nombre">Manuela Jorge</h5>
          </li>
          <li className="mx-4">
            <div className="nosotras">
              <img src={esly} width="150" alt="MJ" />
            </div>
            <h5 className="nombre">Esli Corredor</h5>
          </li>
        </ul>
      </div>
    </section>


    );
    
}

export default Descubre;