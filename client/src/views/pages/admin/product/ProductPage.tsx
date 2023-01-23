import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "./useProduct";

export default function ProductPage() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    
    (async function () {
      const { data } = await axiosInstance.get(`/device/${params.id}`);
      console.log(data);
      
      setData(data);
    })();
  }, []);
  return (
    <div>
      {data.product && Object.keys(data.product).map((key) => {
        return key
      })}
    </div>
  );
}
