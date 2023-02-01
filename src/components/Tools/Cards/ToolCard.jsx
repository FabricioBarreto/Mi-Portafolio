import style from "./ToolCard.module.css"

export function ToolCard({ tool, title, resume, cardId }) {

  const activateClass = (e) => {

    for (let i = 1; i <= 6; i++) {
      if (i !== cardId) {
        document.getElementById("infoContainer" + i).classList.add("ToolCard_deactivate__z1dHm");
        document.getElementById("tool" + i).classList.remove("ToolCard_deactivate__z1dHm");
      }
    }
    document.getElementById("tool" + cardId).classList.toggle("ToolCard_deactivate__z1dHm");
    document.getElementById("infoContainer" + cardId).classList.toggle("ToolCard_deactivate__z1dHm");
  }

  const deactivateAll = e => {
    if (e.target.classList.contains("ToolCard_tool__ggGEX") ||
      e.target.classList.contains("toolImg")) {
      return;
    }
    for (let i = 1; i <= 6; i++) {
      document.getElementById("infoContainer" + i).classList.add("ToolCard_deactivate__z1dHm");
      document.getElementById("tool" + i).classList.remove("ToolCard_deactivate__z1dHm");
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