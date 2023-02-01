<<<<<<< HEAD
import style from "./Tools.module.css";
import { ToolCard as Card } from "./Cards/ToolCard";
import { FormattedMessage } from "react-intl";
import ToolsJson from "./ToolsJson.json"
import logo1 from "./../../img/Figma.png"
import logo2 from "./../../img/GitHub.png"
import logo3 from "./../../img/SpringBoot.png"
import logo4 from "./../../img/IntelliJ.png"
import logo5 from "./../../img/React.png"
import logo6 from "./../../img/Postman.png"

export function Tools() {
  return (
    <div className={style.tools} id="tools">
      <h2 className={style.titleTools}>
        <FormattedMessage
          id="tools.title"
          defaultMessage="Tools"
        />
      </h2>
      <div className={style.toolsSection}>

        {ToolsJson.map(tool => {

          switch (tool.cardId) {
            case "1":
              tool.toolImg = logo1;
              break;
            case "2":
              tool.toolImg = logo2;
              break;
            case "3":
              tool.toolImg = logo3;
              break;
            case "4":
              tool.toolImg = logo4;
              break;
            case "5":
              tool.toolImg = logo5;
              break;
            default:
              tool.toolImg = logo6;
          }

          const resume = <FormattedMessage id={"tools.toolResume" + tool.cardId} defaultMessage="Resume" />

          return <Card tool={tool.toolImg} key={tool.cardId} logo={tool.toolImg} title={tool.title} resume={resume} cardId={tool.cardId} />
        })}

      </div>
    </div>
  )
}
=======
import style from "./Tools.module.css";
import { ToolCard as Card } from "./Cards/ToolCard";
import { FormattedMessage } from "react-intl";
import ToolsJson from "./ToolsJson.json"
import logo1 from "./../../img/Figma.png"
import logo2 from "./../../img/GitHub.png"
import logo3 from "./../../img/SpringBoot.png"
import logo4 from "./../../img/IntelliJ.png"
import logo5 from "./../../img/React.png"
import logo6 from "./../../img/Postman.png"

export function Tools() {
  return (
    <div className={style.tools} id="tools">
      <h2 className={style.titleTools}>
        <FormattedMessage
          id="tools.title"
          defaultMessage="Tools"
        />
      </h2>
      <div className={style.toolsSection}>

        {ToolsJson.map(tool => {

          switch (tool.cardId) {
            case "1":
              tool.toolImg = logo1;
              break;
            case "2":
              tool.toolImg = logo2;
              break;
            case "3":
              tool.toolImg = logo3;
              break;
            case "4":
              tool.toolImg = logo4;
              break;
            case "5":
              tool.toolImg = logo5;
              break;
            default:
              tool.toolImg = logo6;
          }

          const resume = <FormattedMessage id={"tools.toolResume" + tool.cardId} defaultMessage="Resume" />

          return <Card tool={tool.toolImg} key={tool.cardId} logo={tool.toolImg} title={tool.title} resume={resume} cardId={tool.cardId} />
        })}

      </div>
    </div>
  )
}
>>>>>>> 952ab23 (fixed errors)
