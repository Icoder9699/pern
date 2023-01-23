import axiosInstance from "@/lib/axios";
import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url: string) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    axiosInstance
      .get(url)
      .then((res: any) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data && setData(res.data);
        // res.content && setData(res.content);
      })
      .catch((err: any) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  }, [url]);

  return {isLoading, data, error};
}
