import "./footer.css";
import logo2 from "../../assets/img/logo.png";

function Footer() {
  return (
    <footer className="d-flex justify-content-center align-items-center flex-wrap">
      <div className="logoF mx-2">
        <img src={logo2} width="60" alt="ODA_logo" />
      </div>
      ©2020 OnlineDanceAcademy - Todos los derechos reservados.
    </footer>
  );
}

export default Footer;
