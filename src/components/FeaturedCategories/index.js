import { Card, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const { Meta } = Card;

const FeaturedCategories = ({ categories }) => {
  // console.log(categories);
  const router = useRouter();
  return (
    <div>
      <h3 className="text-center">Featured Categories</h3>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl   lg:max-w-none py-8">
          <Row gutter={12} className="justify-center">
            {categories?.map((item, idx) => (
              <Col key={idx} lg={4} md={6} sm={8} xs={12} className="mb-4">
                <Card
                  onClick={() => router.push(`/category/${item?._id}`)}
                  className="mx-auto"
                  hoverable
                  style={{
                    width: 125,
                  }}
                  cover={
                    <div className="p-2">
                      <Image
                        width={200}
                        height={200}
                        layout="responsive"
                        alt="example"
                        src={item?.categoryImage}
                      />
                    </div>
                  }
                >
                  <Meta
                    title={<p className="m-0 text-xs">{item?.categoryName}</p>}
                    className="text-center"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
