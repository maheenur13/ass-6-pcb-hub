import { Card, Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";

const { Meta } = Card;

const FeaturedCategories = () => {
  const [cats, setCats] = useState(["", "", "", "", "", ""]);
  return (
    <div>
      <h3 className="text-center">Featured Categories</h3>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl   lg:max-w-none py-8">
          <Row gutter={12} className="justify-center">
            {cats?.map((item, idx) => (
              <Col key={idx} lg={4} md={6} sm={8} xs={12} className="mb-4">
                <Card
                  className="mx-auto"
                  hoverable
                  style={{
                    width: 135,
                  }}
                  cover={
                    <Image
                      width={200}
                      height={200}
                      layout="responsive"
                      alt="example"
                      src="/images/cpu.png"
                    />
                  }
                >
                  <Meta title="CPU" className="text-center" />
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
