import { useEffect, useState } from "react";
import CompanyLogo from "@/assets/images/company-logo.png";
import cls from "./header.module.scss";

export default function Header() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <header className={cls.header}>
      <div className="flex">
        <div className={cls.header__left}>
          <div className={cls.logo}>
            <img src={CompanyLogo} alt="" />
          </div>
        </div>
        <div className={cls.header__right}>
          <div className={cls.header__lang}>lang-picker</div>
          <button className={cls.header__lang} onClick={() => setTheme(!theme)}>
            dark-mode
          </button>
          <div className={cls.header__logout}>logout</div>
        </div>
      </div>
    </header>
  );
}
