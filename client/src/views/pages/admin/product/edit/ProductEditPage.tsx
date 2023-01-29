import makeStorageUrl from "@/utils/functions/makeStorageUrl";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
} from "@chakra-ui/react";
import useProductEdit from "./useProductEdit";

let counter = 0;
function ProductEditPage() {
  const { product, isLoading, sendData, handleChange } = useProductEdit();

  console.log(counter++);

  return (
    <>
      {product && (
        <>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%">
              <FormControl>
                <FormLabel mb="8px">ID товара:</FormLabel>
                <Input
                  value={product.id ?? ""}
                  onChange={(event: any) =>
                    handleChange("id", event.target.value)
                  }
                />
                <FormErrorMessage>ID is required.</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem w="100%">
              <FormControl>
                <FormLabel mb="8px">Название бренда:</FormLabel>
                <Select
                  value={product.brandId ?? ""}
                  onChange={(e: any) => handleChange("brandId", e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
                <FormErrorMessage>Brand is required.</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem w="100%">
              <FormControl>
                <FormLabel mb="8px">Название товара:</FormLabel>
                <Input
                  value={product.name ?? ""}
                  onChange={(event: any) =>
                    handleChange("name", event.target.value)
                  }
                />
                <FormErrorMessage>Name is required.</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem w="100%">
              <FormControl>
                <FormLabel mb="8px">Цена товара:</FormLabel>{" "}
                <Input
                  value={product.price ?? 0}
                  onChange={(event: any) =>
                    handleChange("price", event.target.value)
                  }
                />
                <FormErrorMessage>Price is required.</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem w="100%">
              <FormControl>
                <FormLabel mb="8px">Рейтинг товара:</FormLabel>
                <Input
                  value={product.rating ?? 0}
                  onChange={(event: any) =>
                    handleChange("rating", event.target.value)
                  }
                />

                <FormErrorMessage>Rating is required.</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem w="100%">
              <FormControl>
                <FormLabel mb="8px">Дата создание:</FormLabel>
                <Input
                  value={product.createdAt ?? 0}
                  onChange={(e: any) =>
                    handleChange("createdAt", e.target.value)
                  }
                />
                <FormErrorMessage>CreatedAt is required.</FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem w="100%">
              <FormControl>
                <FormLabel mb="8px">Дата создание:</FormLabel>
                <Input
                  value={product.updatedAt ?? 0}
                  onChange={(e: any) =>
                    handleChange("updatedAt", e.target.value)
                  }
                />
                <FormErrorMessage>updatedAt is required.</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem w="100%">
              <FormControl>
                <FormLabel>&nbsp;</FormLabel>
                <Button>Фото продукта</Button>
              </FormControl>
              {/* <div className={cls.product__image}> */}
              {/* <img src={makeStorageUrl(product.img ?? "")} alt="" /> */}
              {/* </div> */}
            </GridItem>
          </Grid>
          <Button onClick={sendData} disabled={isLoading} marginTop="18px">
            Изменить
          </Button>
        </>
      )}
    </>
  );
}

export default ProductEditPage;
