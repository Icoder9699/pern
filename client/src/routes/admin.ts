import { ADMIN_ROUTE } from '@/utils/constants/routes';
import AdminPage from "@/views/pages/admin/AdminPage";
import BrandPage from "@/views/pages/admin/brand/BrandPage";
import BrandEditPage from "@/views/pages/admin/brand/edit/BrandEditPage";
import BrandListPage from "@/views/pages/admin/brand/list/BrandListPage";
import CategoryPage from "@/views/pages/admin/category/CategoryPage";
import CategoryEditPage from "@/views/pages/admin/category/edit/CategoryEditPage";
import CategoryListPage from "@/views/pages/admin/category/list/CategoryListPage";
import ProductEditPage from "@/views/pages/admin/product/edit/ProductEditPage";
import ProductListPage from "@/views/pages/admin/product/list/ProductListPage";
import ProductPage from "@/views/pages/admin/product/ProductPage";
import UserEditPage from '@/views/pages/admin/user/edit/UserEditPage';
import UserListPage from '@/views/pages/admin/user/list/UserListPage';
import UserPage from '@/views/pages/admin/user/UserPage';

export const adminRoutes = [
   {
      path: ADMIN_ROUTE.ADMIN,
      element: AdminPage
   },
   {
      path: ADMIN_ROUTE.BRANDS,
      element: BrandListPage
   },
   {
      path: ADMIN_ROUTE.BRAND_VIEW,
      element: BrandPage
   },
   {
      path: ADMIN_ROUTE.BRAND_EDIT,
      element: BrandEditPage
   },
   {
      path: ADMIN_ROUTE.USERS,
      element: UserListPage
   },
   {
      path: ADMIN_ROUTE.USER_VIEW,
      element: UserPage
   },
   {
      path: ADMIN_ROUTE.USER_EDIT,
      element: UserEditPage
   },
   {
      path: ADMIN_ROUTE.CATEGORIES,
      element: CategoryListPage
   },
   {
      path: ADMIN_ROUTE.CATEGORY_VIEW,
      element: CategoryPage
   },
   {
      path: ADMIN_ROUTE.CATEGORY_EDIT,
      element: CategoryEditPage
   },
   {
      path: ADMIN_ROUTE.PRODUCTS,
      element: ProductListPage
   },
   {
      path: ADMIN_ROUTE.PRODUCT_VIEW,
      element: ProductPage
   },
   {
      path: ADMIN_ROUTE.PRODUCT_EDIT,
      element: ProductEditPage
   },
]