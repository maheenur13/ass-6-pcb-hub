import RootLayout from "@/components/Layouts/RootLayout";
import { setComponent } from "@/redux/features/pc-builder/pcbuilder.slice";
import { useAppDispatch } from "@/redux/hook";
import { Button, Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const ChooseComponents = ({ products }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl   lg:max-w-none py-8">
        <Row gutter={16}>
          {products?.map((product, index) => (
            <Col
              key={product?._id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="mb-3"
            >
              <Card
                className="mx-auto"
                cover={
                  <div className="p-4">
                    <Image
                      src={product?.image}
                      alt={product?.productName}
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                  </div>
                }
                actions={[
                  <Button
                    onClick={() => {
                      dispatch(setComponent(product));
                      router.back();
                    }}
                    type="primary"
                    key="addToBuilder"
                  >
                    Add To Builder
                  </Button>,
                ]}
              >
                <h2 className="text-sm font-semibold">
                  {product?.productName}
                </h2>
                <p>Category: {product?.category?.categoryName}</p>
                <p>Price: {product?.price}</p>
                <p>Status: {product?.status}</p>
                <Rate disabled allowHalf defaultValue={product?.rating} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ChooseComponents;

ChooseComponents.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  console.log({ query });
  const response = await fetch(
    `${process.env.API_URL}/api/v1/products/category/${query.categoryId}`
  );
  const data = await response.json();
  return {
    props: {
      products: data.data || [],
    },
  };
};
