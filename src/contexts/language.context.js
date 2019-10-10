import React from "react";
export const LANGUAGES = {
  EN: "en",
  VN: "vi"
};

export const languageContext = React.createContext({
  languague: LANGUAGES.EN,
  toggleLanguage: () => {},
  translate: () => {},
  datetimeFormat: () => {}
});
