import { ADMIN_ROUTE } from "@/utils/constants/routes";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "@/components/common/header/Header";
import AdminDrawer from "@/components/UI/admin/admin-drawer/AdminDrawer";
import cls from "./admin-layout.module.scss";
import { useState } from "react";
import classNames from "classnames";
import {
  BrandsIcon,
  CategoriesIcon,
  ProductsIcon,
  UsersIcon,
} from "@/utils/icons";
import useAdminLayout from "./AdminLayout";

const menus = [
  {
    title: "users",
    icon: () => <UsersIcon />,
    submenus: [
      {
        title: "List",
        path: ADMIN_ROUTE.USERS,
      },
      {
        title: "Add",
        path: ADMIN_ROUTE.USER_ADD,
      },
    ],
  },
  {
    title: "products",
    icon: () => <ProductsIcon />,
    submenus: [
      {
        title: "List",
        path: ADMIN_ROUTE.PRODUCTS,
      },
      {
        title: "Add",
        path: ADMIN_ROUTE.PRODUCT_ADD,
      },
    ],
  },
  {
    title: "brands",
    icon: () => <BrandsIcon />,
    submenus: [
      {
        title: "List",
        path: ADMIN_ROUTE.BRANDS,
      },
      {
        title: "Add",
        path: ADMIN_ROUTE.BRAND_ADD,
      },
    ],
  },
  {
    title: "categories",
    icon: () => <CategoriesIcon />,
    submenus: [
      {
        title: "List",
        path: ADMIN_ROUTE.CATEGORIES,
      },
      {
        title: "Add",
        path: ADMIN_ROUTE.CATEGORY_ADD,
      },
    ],
  },
];

export default function AdminLayout({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onToggleDrawer = (show: boolean) => {
    setIsOpen((isOpen) => (isOpen = show));
  };

  return (
    <div className={cls.layout}>
      <AdminDrawer
        menus={menus}
        onToggleDrawer={onToggleDrawer}
        isOpen={isOpen}
      />
      <div className={classNames(cls.section, { [cls.section__open]: isOpen })}>
        <Header />
        <main>
          <div className={cls.section__row}>
            <button className="button" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <h1 className={cls.section__title}>Page: {location.pathname}</h1>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
