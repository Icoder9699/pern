import { useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function useProductEdit() {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [product, setProduct] = useState({
    id: null,
    brandId: null,
    name: null,
    price: null,
    rating: null,
    createdAt: null,
    updatedAt: null,
    img: null,
  });
  const params = useParams();

  async function getData() {
    try {
      const { data } = await axiosInstance.get(`/device/${params.id}`);
      setProduct(data.product);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleChange(key: string, value: any) {
    setProduct((state) => ({ ...state, [key]: value }));
  }

  function sendData() {
    try {
      setLoading(true)
      axiosInstance.post(`/device/${product.id}`, product);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  }

  return {
    product,
    isLoading,
    sendData,
    handleChange,
  };
}
