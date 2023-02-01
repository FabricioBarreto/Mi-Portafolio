import style from "./ProjectCard.module.css";
import Close from "./../../../img/Close.png";
import { FormattedMessage } from "react-intl";

export function ProjectCard({ title, resume, projectImg, linkGitHub, cardId }) {

  const toggleResume = e => {
    e.preventDefault();

    for (let i = 1; i <= 4; i++) {
      if (i !== cardId) {
        document.getElementById("cardResume" + i).classList.add("ProjectCard_disabled__poF4A");
      }
    }
    document.getElementById("cardResume" + cardId).classList.toggle("ProjectCard_disabled__poF4A");
  }

  const addAllDisabled = e => {

    if (e.target.classList.contains("ProjectCard_btn__ln72g")) {
      return;
    }

    for (let i = 1; i <= 4; i++) {
      document.getElementById("cardResume" + i).classList.add("ProjectCard_disabled__poF4A");
    }
  }

  document.body.addEventListener("click", addAllDisabled);

  return (
    <div className={style.projectCard + " container"} >
      <h2 className={style.title}>{title}</h2>
      <div className={style.content}>
        <img src={projectImg} alt="" className={style.projectImg + " imagen"} id="proImg" />
        <div className={style.buttonsCntainer}>
          <a href={linkGitHub} className={style.btn}>GitHub</a>
          <a href=" #" className={style.btn} onClick={toggleResume} id={"btnResume" + cardId}>
            <FormattedMessage
              id="projectCard.btnResume"
              defaultMessage="resume"
            />
          </a>
        </div>
      </div>
      <div className={style.resume + " " + style.disabled} id={"cardResume" + cardId}>
        <img src={Close} alt="Close" className={style.close} id="btnClose" />
        <h2 className={style.title}>{title}</h2>
        <p>{resume}</p>
      </div>
    </div >
  )
}
