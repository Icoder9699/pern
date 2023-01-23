import Table from "@/components/common/table/Table";
import axiosInstance from "@/lib/axios";
import { EditIcon, EyeIcon, TrashIcon, UserIcon } from "@/utils/icons";
import { useEffect, useState } from "react";
import useUserList from "./useUserList";

const rows = ["№", "email", "password", "created_at", "role", 'actions'];

let count = 1
export default function UserListPage() {
  const [userList, setUserList] = useState([]);

  console.log(count++, 'UsersPage: ');
  
  const getUserList = async () => {
    const resp = await axiosInstance.get("/auth/list");
    setUserList(resp.data.users);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div style={{ margin: "0 -20px" }}>
      <Table rows={rows}>
        {userList ? (
          userList.map((col: any) => (
            <tr key={col.id}>
              <td>{col.id}</td>
              <td>{col.email}</td>
              <td>{col.password}</td>
              <td>{col.createdAt}</td>
              <td>{col.role}</td>
              <td>
                <span><EyeIcon/></span>
                <span><EditIcon/></span>
                <span><TrashIcon/></span>
              </td>
            </tr>
          ))
        ) : (
          <h2>
            Empty Table
          </h2>
        )}
      </Table>
    </div>
  );
}
