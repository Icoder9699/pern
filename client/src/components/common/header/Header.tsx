import { useEffect, useState } from "react";
import CompanyLogo from "@/assets/images/company-logo.png";
import cls from "./header.module.scss";
import classNames from "classnames";
import { LogoutIcon } from "@/utils/icons";
import LangPicker from "@/components/UI/common/lang-picker/LangPicker";
import Switch from "@/components/UI/common/dropdown-menu/switch/Switch";

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
          <LangPicker />
          <Switch setTheme={setTheme} theme={theme}/>
          <button className={cls.header__logout}>
            <LogoutIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
