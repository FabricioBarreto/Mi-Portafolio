import style from "./ToolCard.module.css"

export function ToolCard({ tool, title, resume, cardId }) {

  const activateClass = (e) => {

    for (let i = 1; i <= 6; i++) {
      if (i !== cardId) {
        document.getElementById("infoContainer" + i).style.display = "none";
        document.getElementById("tool" + i).style.display = "flex";
      }
    }
    document.getElementById("tool" + cardId).style.display = "none";
    document.getElementById("infoContainer" + cardId).style.display = "flex";
  }

  const deactivateAll = e => {
    if (e.target.classList.contains("toolImg")) {
      return;
    }
    for (let i = 1; i <= 6; i++) {
      document.getElementById("infoContainer" + i).style.display = "none";
      document.getElementById("tool" + i).style.display = "flex";
    }
  }

  document.body.addEventListener("click", deactivateAll);

  return (
    <>
      <div className={style.tool} id={"tool" + cardId} onClick={activateClass}>
        <img src={tool} alt={title} className="toolImg" />
      </div>
      <div className={style.infoContainer + " " + style.deactivate} id={"infoContainer" + cardId} onClick={activateClass}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.resume}>
          {resume}
        </p>
      </div>
    </>
  )
}