import { Col, Row } from "antd";
import Product from "../common/Product";

const FeaturedProducts = ({ products }) => {
  // const [prods, setProds] = useState(["", "", "", "", "", ""]);
  return (
    <div>
      <h3 className="text-center">Featured Products</h3>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl   lg:max-w-none py-8">
          <Row gutter={16}>
            {products?.map((product, index) => (
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

export default FeaturedProducts;
