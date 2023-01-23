import useTable from "./useTable";
import cls from "./table.module.scss";
import { memo } from "react";

interface IProps {
  rows?: string[];
  children: any;
  isLoading: boolean;
}

export default memo(function Table({ rows, isLoading, children }: IProps) {
  return (
    <table className={cls.table}>
      <thead className={cls.table__head}>
        <tr>
          {rows?.map((row, idx) => (
            <th key={idx}>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children ? children : (
        (
          <tr>
            <td colSpan={12}>
              {isLoading ? (
                <h2 style={{ textAlign: "center" }}>Loading...</h2>
              ) : (
                <h2 style={{ textAlign: "center" }}>Empty Table</h2>
              )}
            </td>
          </tr>
        )
      )}</tbody>
      
    </table>
  );
});
