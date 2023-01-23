import Table from "@/components/common/table/Table";
import { currencyFormatter } from "@/utils/functions/numberFormatter";
import makeStorageUrl from "@/utils/functions/makeStorageUrl";
import { EditIcon, EyeIcon, TrashIcon } from "@/utils/icons";
import usePorudctList from "./usePorudctList";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";

const rows = ["№", "name", "price", "rating", "image", "brandId", "actions"];

let renderCount = 0;

export default function ProductListPAge() {
  const { isLoading,data } = useFetch("/device/list");

  console.log("ProductListPge", renderCount++, data, isLoading);

  return (
    <div style={{ margin: "0 -20px" }}>
      <Table rows={rows}>
        {data?.rows.length ? (
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
                <span>
                  <EyeIcon />
                </span>
                <span>
                  <EditIcon />
                </span>
                <span>
                  <TrashIcon />
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={12}>
              {isLoading ? (
                <h2 style={{ textAlign: "center" }}>Loading...</h2>
              ) : (
                <h2 style={{ textAlign: "center" }}>Empty Table</h2>
              )}
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
