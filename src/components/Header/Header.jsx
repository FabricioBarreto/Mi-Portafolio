import style from "./Header.module.css"
import Spanish from "./../../img/Spanish.png"
import English from "./../../img/English.png"
import { useContext } from "react";
import { langContext } from "../../context/langContext";
import { FormattedMessage } from "react-intl";

export function Header() {

  const lang = useContext(langContext);

  const toggleNav = (e) => {
    if (e.target.id === "line" || e.target.id === "buttonToggle") {
      document.getElementById("nav").classList.remove("Header_hidden__r-lc4");
      // document.getElementById("links").classList.toggle("Header_active__XM0aX");
      return;
    }
    document.getElementById("nav").classList.add("Header_hidden__r-lc4");
    // document.getElementById("links").classList.remove("Header_active__XM0aX");
  }

  document.body.addEventListener("click", toggleNav);

  return (
    <header className={style.headerContainer}>
      <nav className={style.navContainer + " " + style.hidden} id="nav">
        <ul className={style.links} id="links">
          <li><a className={style.link} href="#home">
            <FormattedMessage
              id="header.linksHome"
              defaultMessage="Home"
            />
          </a></li>
          <li><a className={style.link} href="#tools">
            <FormattedMessage
              id="header.linksTools"
              defaultMessage="Tools"
            />
          </a></li>
          <li><a className={style.link} href="#projects">
            <FormattedMessage
              id="header.linksProjects"
              defaultMessage="Projects"
            />
          </a></li>
          <li><a className={style.link} href="#contactMe">
            <FormattedMessage
              id="header.linksContact"
              defaultMessage="Conteact"
            />
          </a></li>
          <div className={style.languages}>
            <button onClick={() => lang.setLanguage("es-ES")}><img src={Spanish} alt="Spanish" /></button>
            <button onClick={() => lang.setLanguage("en-US")}><img src={English} alt="English" /></button>
          </div>
        </ul>
      </nav >
      <div className={style.buttonToggle} id="buttonToggle" onClick={toggleNav}>
        <div className={style.line} id="line"></div>
        <div className={style.line} id="line"></div>
        <div className={style.line} id="line"></div>
      </div>
    </header >
  )
}
