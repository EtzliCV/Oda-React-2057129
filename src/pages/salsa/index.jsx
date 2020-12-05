import "./salsa.css"
import LogoSalsa from "../../assets/imgsalsa/logo.png";
import IconMenuSalsa from "../../assets/imgsalsa/menu2.png";
function Salsa() {
    return(
        <section className="body col-sm-12 col-md-12 col-lg-12 py-4">
        <header className="container py-2 d-flex align-items-center justify-content-between">
            <a href=""><div className="logo"><img src={LogoSalsa} alt="ODA_logo" width="100"/> </div> </a>
            <label htmlFor="" className="menu1"> <img src={IconMenuSalsa} alt="IconMenu"/></label>
        </header>
    </section>
    );
}

 export default Salsa;