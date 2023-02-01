import React, { useState } from "react";
import TextInInglish from "./../lang/en-US.json";
import TextInSpanish from "./../lang/es-ES.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let defaultTexts;
  let defaultLocale;
  const lang = localStorage.getItem("lang");

  if (lang) {
    defaultLocale = lang;

    if (lang === "es-ES") {
      defaultTexts = TextInSpanish;
    } else if (lang === "en-US") {
      defaultTexts = TextInInglish;
    } else {
      defaultTexts = TextInInglish;
      defaultLocale = "en-US";
    }
  }

  const [texts, setTexts] = useState(defaultTexts);
  const [locale, setLocale] = useState(defaultLocale);

  const setLanguage = (language) => {
    switch (language) {
      case "es-ES":
        setTexts(TextInSpanish);
        setLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;
      case "en-US":
        setTexts(TextInInglish);
        localStorage.setItem("lang", "en-US");
        setLocale("en-US");
        break;
      default:
        setTexts(TextInInglish);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <langContext.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={locale} messages={texts}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
