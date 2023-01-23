import useFetch from "@/hooks/useFetch";
import axiosInstance from "@/lib/axios";
import makeStorageUrl from "@/utils/functions/makeStorageUrl";
import { currencyFormatter } from "@/utils/functions/numberFormatter";
import { useParams } from "react-router-dom";
import cls from "./product.module.scss";
import useProduct from "./useProduct";

export default function ProductPage() {
  const params = useParams();
  const { isLoading, data } = useFetch(`/device/${params.id}`);
  console.log(data);

  return (
    <>
      {data?.product && (
        <div className={cls.product}>
          <div className={cls.product__row}>
            <div className={cls.product__info}>
              <p><strong>Номер товара:</strong> {data.product.id}</p>
              <p><strong>Название бренда:</strong> {data.product.brandId ?? "Не найден"} </p>
              <p><strong>Название товара:</strong> {data.product.name} </p>
              <p><strong>Цена товара:</strong> {currencyFormatter(data.product.price)} </p>
              <p><strong>Рейтинг товара:</strong> {data.product.rating}</p>
              <p><strong>Дата создание:</strong> {data.product.createdAt} </p>
              <p><strong>Дата создание:</strong> {data.product.updatedAt} </p>
            </div>
            <div className={cls.product__image}>
              <img src={makeStorageUrl(data.product.img)} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
