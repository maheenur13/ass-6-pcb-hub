import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/common/Product";
import { Breadcrumb, Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const CateGoryDetails = (props) => {
  const router = useRouter();
  const { categoryId } = router.query;

  console.log({ categoryId });
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl   lg:max-w-none py-8">
          <Breadcrumb
            className="mb-3"
            items={[
              {
                title: <Link href={"/"}>Home</Link>,
              },

              {
                title: "categories",
              },
              {
                title: "products",
              },
            ]}
          />
          <Row gutter={16}>
            {props?.products?.map((product, index) => (
              <Col key={index} lg={8} md={12} sm={12} xs={12}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CateGoryDetails;

CateGoryDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/api/v1/category`);
  const products = await response.json();

  const paths = products?.data?.map((prod) => ({
    params: { categoryId: prod._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const response = await fetch(
    `${process.env.API_URL}/api/v1/products/category/${params.categoryId}`
  );
  const data = await response.json();
  return {
    props: {
      products: data.data,
    },
  };
};
