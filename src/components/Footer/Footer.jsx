import style from "./Footer.module.css";
import LinkedinFooter from "./../../img/LinkedinFooter.png"
import GitHubFooter from "./../../img/GitHubFooter.png"
import FacebookFooter from "./../../img/FacebookFooter.png"
import InstagramFooter from "./../../img/InstagramFooter.png"
import TwitterFooter from "./../../img/TwitterFooter.png"

export function Footer() {
  return (
    <footer className={style.footer + " container"}>
      <nav>
        <ul className={style.linksFooter}>
          <li><a href="https://www.linkedin.com/in/fabricio-barreto-9082b0187/"><img src={LinkedinFooter} alt="" /></a></li>
          <li><a href="https://github.com/fabrib26"><img src={GitHubFooter} alt="" /></a></li>
          <li><a href="https://www.facebook.com/fabri.barreto"><img src={FacebookFooter} alt="" /></a></li>
          <li><a href="https://twitter.com/Fabri2610"><img src={TwitterFooter} alt="" /></a></li>
          <li><a href="https://www.instagram.com/fabrib_26/"><img src={InstagramFooter} alt="" /></a></li>
        </ul>
      </nav>
      <p className={style.coppy}>©COPYRIGHT FABRICIO BARRETO - 2023</p>
    </footer>
  )
}
