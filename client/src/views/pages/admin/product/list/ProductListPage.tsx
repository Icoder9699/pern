// components and icons
import Table from "@/components/common/table/Table";
import { EditIcon, EyeIcon, TrashIcon } from "@/utils/icons";

// helper functions
import { currencyFormatter } from "@/utils/functions/numberFormatter";
import makeStorageUrl from "@/utils/functions/makeStorageUrl";

// constants
import { ADMIN_ROUTE } from "@/utils/constants/routes";

// hooks
import { useNavigate } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import useProductList from "./useProductList";

const rows = ["№", "name", "price", "rating", "image", "brandId", "actions"];

export default function ProductListPAge() {
  const { isLoading, data } = useFetch("/device/list");
  const {} = useProductList();
  const navigate = useNavigate();

  return (
    <div style={{ margin: "0 -20px" }}>
      <Table rows={rows} isLoading={isLoading}>
        {data?.rows.length && (
          data.rows?.map((col: any) => (
            <tr key={col.id}>
              <td>{col.id}</td>
              <td>{col.name}</td>
              <td>{currencyFormatter(col.price)}</td>
              <td>{col.rating}</td>
              <td>
                <img src={makeStorageUrl(col.img)} alt="" />
              </td>
              <td>{col.brandId || "not found"}</td>
              <td>
                <span onClick={() => navigate(`/admin/product/${col.id}`)}>
                  <EyeIcon />
                </span>
                <span onClick={() => navigate(`/admin/product/edit/${col.id}`)}>
                  <EditIcon/>
                </span>
                <span>
                  <TrashIcon />
                </span>
              </td>
            </tr>
          ))
        )}
      </Table>
    </div>
  );
}
