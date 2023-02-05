import useFetch from "@/hooks/useFetch";
import makeStorageUrl from "@/utils/functions/makeStorageUrl";
import { currencyFormatter } from "@/utils/functions/numberFormatter";
import { Box, Center, Divider, Grid, GridItem, Image } from "@chakra-ui/react";
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
        <Grid templateColumns='repeat(2, 1fr)' gap={100}>
          <GridItem>
            <Center height="50px">
              <Divider orientation="horizontal" />
            </Center>
            <p>
              <strong>Номер товара:</strong> {data.product.id}
            </p>
            <Center height="50px">
              <Divider orientation="horizontal" />
            </Center>
            <p>
              <strong>Название бренда:</strong>{" "}
              {data.product.brandId ?? "Не найден"}{" "}
            </p>
            <Center height="50px">
              <Divider orientation="horizontal" />
            </Center>
            <p>
              <strong>Название товара:</strong> {data.product.name}{" "}
            </p>
            <Center height="50px">
              <Divider orientation="horizontal" />
            </Center>
            <p>
              <strong>Цена товара:</strong>{" "}
              {currencyFormatter(data.product.price)}{" "}
            </p>
            <Center height="50px">
              <Divider orientation="horizontal" />
            </Center>
            <p>
              <strong>Рейтинг товара:</strong> {data.product.rating}
            </p>
            <Center height="50px">
              <Divider orientation="horizontal" />
            </Center>
            <p>
              <strong>Дата создание:</strong> {data.product.createdAt}{" "}
            </p>
            <Center height="50px">
              <Divider orientation="horizontal" />
            </Center>
            <p>
              <strong>Дата создание:</strong> {data.product.updatedAt}{" "}
            </p>
            <Center height="50px">
              <Divider orientation="horizontal" />
            </Center>
          </GridItem>
          <GridItem>
            <Box boxSize="sm">
              <Image src={makeStorageUrl(data.product.img)} alt="Dan Abramov" />
            </Box>
          </GridItem>
        </Grid>
      )}
    </>
  );
}
