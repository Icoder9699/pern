import { NavLink, useLocation } from "react-router-dom";

import cls from "./dropdown-menu.module.scss";
import classNames from "classnames";
import { SubmenuIcon } from "@/utils/icons";

interface ISubmenu {
  title: string;
  path: string;
}

interface IProps {
  isOpen: boolean;
  title: string;
  index: number;
  icon: any;
  submenus?: ISubmenu[];
  selectedMenuId: number;
  selectMenu: (id: number) => void;
}

export default function DropdownMenu(props: IProps) {
  const location = useLocation()

  return (
    <div className={cls.menu}>
      <div
        className={classNames(cls.menu__title, {[cls.menu__title_open]: !props.isOpen})}
        onClick={() => props.selectMenu(props.index)}
      >
        <span className={cls.icon}>{props.icon()}</span>
        {<span className={cls.title}>{props.title}</span>}
      </div>
      {props.selectedMenuId === props.index && (
        <ul className={classNames(cls.menu__submenus, {[cls.menu__submenus_tiny]: !props.isOpen})}>
          {
            props.submenus?.map((submenu: ISubmenu, idx) => {
              return (
                <li className={classNames(cls.submenu, {[cls.active]: location.pathname === `/${submenu.path}`})} key={idx}>
                  <NavLink to={submenu.path}>
                    <span>
                      <SubmenuIcon />
                    </span>
                    <span>{submenu.title}</span>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
