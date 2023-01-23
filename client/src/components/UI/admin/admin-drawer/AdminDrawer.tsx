import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import classNames from "classnames";

import cls from "./admin-drawer.module.scss";
import UserLogo from "@/assets/images/user-logo.png";
import DropdownMenu from "@/components/UI/common/dropdown-menu/DropdownMenu";
import { ArrowLeft, ArrowRight } from "@/utils/icons";

interface IProps {
  title?: string;
  menus: any;
  onToggleDrawer: (close: boolean) => void;
  isOpen: boolean;
}

export default memo(function AdminDrawer(props: IProps) {
  const location = useLocation();

  const [selectedMenuId, setSelectedMenuId] = useState<null | number>(null);

  const handleSelectMenu = (index: number) => {
    if (selectedMenuId == index) {
      setSelectedMenuId(null);
      return;
    }
    setSelectedMenuId(index);
  };

  useEffect(() => {
    props.onToggleDrawer(false);
    setSelectedMenuId(null);
  }, [location.pathname]);

  return (
    <div className={classNames(cls.drawer, { [cls.active]: props.isOpen })}>
      <div
        className={classNames(cls.drawer__header, {
          [cls.open]: !props.isOpen,
        })}
      >
        <img src={UserLogo} alt="user-logo" />
        {props.isOpen && <h2>{props.title ? props.title : "Kenty"}</h2>}
      </div>
      <button
        className={cls.drawer__btn}
        onClick={() => props.onToggleDrawer(!props.isOpen)}
      >
        {props.isOpen ? <ArrowLeft /> : <ArrowRight />}
      </button>
      <div className={cls.drawer__body}>
        {props.menus.map((menu: any, idx: any) => (
          <DropdownMenu
            isOpen={props.isOpen}
            index={idx}
            key={idx}
            {...menu}
            selectMenu={handleSelectMenu}
            selectedMenuId={selectedMenuId}
          />
        ))}
      </div>
    </div>
  );
});
