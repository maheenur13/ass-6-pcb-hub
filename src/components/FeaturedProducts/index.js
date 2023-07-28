import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import { useState } from "react";

const { Meta } = Card;

const FeaturedProducts = () => {
  const [prods, setProds] = useState(["", "", "", "", "", ""]);
  return (
    <div>
      <h3 className="text-center">Featured Products</h3>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl   lg:max-w-none py-8">
          <Row gutter={16}>
            {prods?.map((products, index) => (
              <Col key={index} lg={8} md={12} sm={12} xs={12}>
                <Card
                  className="mb-4"
                  hoverable
                  style={{
                    width: "100%",
                  }}
                  cover={
                    <Image
                      width={200}
                      height={200}
                      layout="responsive"
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                  <div style={{ marginTop: 10 }}>
                    <strong>Price: </strong>1200
                  </div>
                  <div>
                    <strong>Status: </strong>inStock
                  </div>
                  <div>
                    <strong>Rating: </strong>
                    <Rate disabled defaultValue={4} />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
