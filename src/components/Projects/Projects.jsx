import { ProjectCard } from "./Cards/ProjectCard";
import style from "./Projects.module.css";
import { FormattedMessage } from "react-intl";
import img1 from "./../../img/Publicaciones.jpg";
import img2 from "./../../img/Movies.jpg";
import img3 from "./../../img/Disney.jpg";
import img4 from "./../../img/Encriptor.jpg";
import ProjectsJson from "./ProjectsJson.json";

export function Projects() {

  return (
    <div className={style.projects} id="projects">
      <h2 className={style.titleProjects}>
        <FormattedMessage
          id="projects.titleProjects"
          defaultMessage="Featured projects"
        />
      </h2>
      <div className={style.projectsSection}>

        {
          ProjectsJson.map(project => {
            switch (project.cardId) {
              case "1":
                project.projectImg = img1;
                break;
              case "2":
                project.projectImg = img2;
                break;
              case "3":
                project.projectImg = img3;
                break;
              default:
                project.projectImg = img4;
            }
            const title = <FormattedMessage id={"projects.projectTitle" + project.cardId} defaultMessage="Title" />
            const resume = <FormattedMessage id={"projects.projectReume" + project.cardId} defaultMessage="Resume" />
            return <ProjectCard key={project.cardId} cardId={project.cardId} title={title} resume={resume} projectImg={project.projectImg} linkGitHub={project.linkGitHub} />;
          })
        }

      </div>
    </div>
  )
}
