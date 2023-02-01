import style from "./Header.module.css"
import Spanish from "./../../img/Spanish.png"
import English from "./../../img/English.png"
import { useContext } from "react";
import { langContext } from "../../context/langContext";
import { FormattedMessage } from "react-intl";

export function Header() {

  const lang = useContext(langContext);

  const actionToggle = () => {
    const links = document.getElementById("links");
    links.classList.toggle("Header_activeToggle__-itv3");
  }

  const closeMenu = (e) => {
    const links = document.getElementById("links");
    if (e.target.classList.contains("Header_line__vnQOP") || e.target.classList.contains("Header_buttonToggle__X+eP1")) {
      return null;
    }
    links.classList.remove("Header_activeToggle__-itv3");
  }

  document.body.addEventListener("click", closeMenu);

  return (
    <header className={style.headerContainer + " container fixed-top"}>
      <nav className={style.navContainer}>
        <a className={style.brand} href="#home">FB</a>
        <div className={style.buttonToggle} onClick={actionToggle}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
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
    </header >
  )
}
