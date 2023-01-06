import Table from "@/components/common/table/Table";
import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";
import useUserList from "./useUserList";


const rows = [
  '№',
  'email',
  'password',
  'created_at',
  'role',
]

export default function UserListPage() {
  const [userList, setUserList] = useState([]);

  const getUserList = async () => {
    const resp = await axiosInstance.get("/auth/list");
    setUserList(resp.data.users)
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div style={{margin: '0 -20px'}}>
      <Table rows={rows} data={userList} />
    </div>
  );
}
