import style from "./ContactMe.module.css";
import { FormattedMessage } from "react-intl";

export function ContactMe() {

  return (
    <div className={style.contactMeConatiner + " cotainer"} id="contactMe">
      <h2 className={style.titleContactMe}>
        <FormattedMessage
          id="contactMe.titleContacme" defaultMessage="Contact Me"
        />
      </h2>
      <form className={style.contactMeForm} action="https://formsubmit.co/fabrib40@gmail.com" method="POST">

        <label htmlFor="name" className={style.formLabel} id="labelName">
          <FormattedMessage
            id="contactMe.FormPlaceHolderFullName" defaultMessage="Full Name"
          />
        </label>
        <input type="text" name="name" id="name" className={style.name} required />

        <label htmlFor="email" className={style.formLabel} id="labelEmail">
          <FormattedMessage
            id="contactMe.FormPlaceHolderEmail" defaultMessage="E-mail"
          />
        </label>
        <input type="email" name="email" id="email" className={style.email} required />

        <label htmlFor="message" className={style.formLabel} id="labelMessage">
          <FormattedMessage
            id="contactMe.FormPlaceHolderMessage" defaultMessage="Message"
          />
        </label>
        <textarea name="message" rows="3" id="message" className={style.message} required minLength={10} />

        <button type="submit" className={style.buttonSubmit}>
          <FormattedMessage
            id="contactMe.buttonSubmit"
            defaultMessage="Send"
          />
        </button>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value="https://fabrib26.github.io/Mi-Portafolio/"></input>
      </form>
    </div>
  )
}
