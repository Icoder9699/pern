import useTable from "./useTable";
import cls from "./table.module.scss";

interface IProps {
  rows?: string[];
  data?: string[];
}

export default function Table({ data, rows }: IProps) {
   
  return (
    <table className={cls.table}>
      <thead className={cls.table__head}>
        <tr>
          {rows?.map((row, idx) => (
            <th key={idx}>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data ? (
          data.map((col:any) => (
            <tr key={col.id}>
              <td>{col.id}</td>
              <td>{col.email}</td>
              <td>{col.password}</td>
              <td>{col.createdAt}</td>
              <td>{col.role}</td>
            </tr>
          ))
        ) : (
          <h1>Empty Table</h1>
        )}
      </tbody>
    </table>
  );
}
