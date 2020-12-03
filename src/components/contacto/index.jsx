import "./contacto.css"
import gmail from "../../assets/img/gmailicon.png";
import face from "../../assets/img/facebookicon.png";
import insta from "../../assets/img/instagramicon.png";
import hotmart from "../../assets/img/hotmarticon.png";
function Contacto() {
    return(
        <section class="BGpink mt-2">
      <div
        class="container py-4 d-flex justify-content-around align-items-center flex-wrap"
      >
        <div class="redes text-white m-3">
          <h4 class="tituloW m-0">Contáctenos</h4>
          <p class="text-center">Escríbenos si tienes alguna duda</p>
          <div class="iconos3 d-flex justify-content-around">
            <div>
              <a href=""
                ><img src={gmail} alt="Gmail" width="40"
              /></a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/ODA-Online-dance-academy-106665397621668/"
                ><img src={face} alt="Fb" width="40"
              /></a>
            </div>
            <div>
              <a href="https://www.instagram.com/oda_.dance/?hl=es-la"
                ><img src={insta}alt="Int" width="40"
              /></a>
            </div>
            <div>
              <a href=""
                ><img src={hotmart}  alt="Hs" width="40"
              /></a>
            </div>
          </div>
        </div>
        <form class="form">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Ingresa tu email"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              rows="3"
              placeholder="Escribe tu asunto"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary boton4 py-1 px-5">
            Enviar
          </button>
        </form>
      </div>
    </section>

    );
    
}

export default Contacto;
