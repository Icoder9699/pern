import classNames from "classnames";
import { useState } from "react";
import cls from "./lang-picker.module.scss";

const langs = ["uz", "ru"];

export default function LangPicker() {
  const [isOpen, setOpen] = useState(false);
  const [lang, setLang] = useState("uz");

  const setLanguage = (lang: string) => {
    setOpen(false);
    setLang(lang);
  };

  return (
    <div className={cls.lang}>
      <div className={cls.lang__selected} onClick={() => setOpen(true)}>
        <span>{lang}</span>
        <img src="" alt="" />
      </div>

      <ul className={classNames(cls.lang__list, {[cls.lang__list_active]: isOpen})}>
        {langs.map((lang, index) => (
          <li onClick={() => setLanguage(lang)} key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}
