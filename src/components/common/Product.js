import { Card, Rate } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const { Meta } = Card;

const Product = ({ product }) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/product/${product._id}`)}
      className="mb-4"
      hoverable
      style={{
        width: "90%",
      }}
      cover={
        <div className="p-3">
          <Image
            width={200}
            height={200}
            layout="responsive"
            alt="example"
            src={product?.image}
          />
        </div>
      }
    >
      <Meta
        title={<p>{product?.productName}</p>}
        description={<div className="line-clamp-3">{product?.description}</div>}
      />
      <div style={{ marginTop: 10 }}>
        <strong>Price: </strong>
        {product?.price}
      </div>
      <div>
        <strong>Status: </strong>
        {product?.status}
      </div>
      <div>
        <strong>Rating: </strong>
        <Rate defaultValue={product?.rating} />
      </div>
    </Card>
  );
};

export default Product;
