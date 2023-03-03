import style from "./Home.module.css";
import Profile from "./../../img/Perfil.jpeg";
import FabricioCV from "./../../docs/FabricioBarretoCV.pdf";
import { FormattedMessage } from "react-intl";

export function Home() {

  return (
    <div className={style.home} id="home">
      <img src={Profile} alt="PhotoProfile" className={style.profilePhoto} />
      <div className={style.infoContainer} id="home">
        <h2 className={style.name}>
          <FormattedMessage
            id="home.name"
            defaultMessage={"I'm Fabricio"}
          />
        </h2>
        <p className={style.abautMe}>
          <FormattedMessage
            id="home.abautMe"
            defaultMessage="JAVA back-end developer for more than 3 years."
          />
        </p>
        <a className={style.btnDowload} download href={FabricioCV}>
          <FormattedMessage
            id="home.dowloadCV"
            defaultMessage="Dowload CV"
          />
        </a>
      </div>
    </div >
  )
}