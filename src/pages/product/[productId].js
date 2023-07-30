import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Divider, Image, Rate, Tag } from "antd";

const ProductDetailsPage = ({ product }) => {
  return (
    <div className="container mx-auto mt-4">
      <Card className="rounded-lg shadow-lg">
        <div className="relative">
          <Image
            alt={product?.productName}
            src={product?.image}
            className="object-cover h-64 w-full rounded-t-lg"
          />
          <Tag color="blue" className="absolute top-4 right-4 z-10">
            {product?.category?.categoryName}
          </Tag>
          <Tag
            color={product?.status === "in stock" ? "green" : "red"}
            className="absolute top-12 right-4 z-10"
          >
            {product?.status}
          </Tag>
        </div>
        <Card.Meta title={product?.productName} />
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">${product?.price}</span>
          <Rate allowHalf defaultValue={product?.rating} disabled />
        </div>
        <Divider />
        <div className="my-4">
          <h2 className="text-xl font-bold">Description</h2>
          <p>{product?.description}</p>
        </div>
        <Divider />
        <div className="my-4">
          <h2 className="text-xl font-bold">Key Features</h2>
          <ul>
            {product?.keyFeatures?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <Divider />
        <div className="my-4">
          <h2 className="text-xl font-bold">
            Average Rating: {product?.avgRating}
          </h2>
          <Divider />
          <div>
            <h2 className="text-xl font-bold">Reviews</h2>
            {product?.reviews?.map((review, index) => (
              <p key={index}>{review}</p>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/api/v1/products`);
  const products = await response.json();

  const paths = products?.data?.map((prod) => ({
    params: { productId: prod._id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const response = await fetch(
    `${process.env.API_URL}/api/v1/products/${params.productId}`
  );
  const data = await response.json();
  console.log({ data });
  return {
    props: {
      product: data.data,
    },
  };
};
