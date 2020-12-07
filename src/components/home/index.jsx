import logo from "../../assets/img/logo.png";
import icon from "../../assets/img/menu2.png";

function Home() {
  return (
    <section className="BGgradient py-4">
      <header className="container py-2 d-flex align-items-center justify-content-between">
        <a href="">
          <div className="logo">
            <img src={logo} width="100" alt="ODA_logo" />
          </div>
        </a>
        <label className="menu1">
          <img src={icon} alt="IconMenu" />
        </label>
      </header>
    </section>
  );
}

export default Home;
