import RootLayout from "@/components/Layouts/RootLayout";
import {
  emptyComponent,
  removeComponent,
} from "@/redux/features/pc-builder/pcbuilder.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Divider, Modal, Result, Tooltip } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const PcBuilder = ({ categories }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { components } = useAppSelector((state) => state.pcBuilder);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto py-8 grid px-2">
      {categories.map((category) => {
        const component = components?.find(
          (comp) => comp.category._id === category._id
        );
        return (
          <div key={category.id}>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-sm shadow-sm px-4 py-2 flex  items-center justify-between space-y-2">
              <div className="flex w-full">
                <Image
                  src={category?.categoryImage}
                  alt="cstegoryImage"
                  width={60}
                  height={60}
                />
                <div>
                  <h2 className="text-sm ms-3 my-0 font-semibold text-slate-500 ">
                    {category.categoryName}
                  </h2>
                  {component && (
                    <div className="ms-3 w-full p-2">
                      <h4 className="m-0 text-gray-600 text-xs me-5">
                        {component?.productName}
                      </h4>

                      <h4 className="m-0 text-gray-600 text-xs me-5">
                        Price: {component?.price} TK
                      </h4>
                    </div>
                  )}
                </div>
              </div>
              {category._id === component?.category?._id ? (
                <div>
                  <Tooltip title="Remove">
                    <Button
                      icon={<CloseOutlined />}
                      onClick={() => dispatch(removeComponent(component))}
                    />
                  </Tooltip>
                </div>
              ) : (
                <Button
                  onClick={() =>
                    router.push(
                      `/pc-builder/choose-component?categoryId=${category?._id}`
                    )
                  }
                  type="primary"
                  className="bg-sky-800"
                >
                  Choose/Select
                </Button>
              )}
            </div>

            <Divider />
          </div>
        );
      })}
      <Button
        onClick={() => setIsModalOpen(true)}
        disabled={
          categories?.length > 0 && categories?.length !== components?.length
        }
        type="primary"
        className="h-12"
      >
        Complete Build
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Result
          status="success"
          title="You have successfully built your pc!"
          subTitle="You can build more pc as your desired with favorite components!"
          extra={[
            <Button
              onClick={() => {
                dispatch(emptyComponent());
                setIsModalOpen(false);
                router.push("/");
              }}
              type="primary"
              key="home"
            >
              Go Home
            </Button>,
            <Button
              key="build_again"
              onClick={() => {
                dispatch(emptyComponent());
                setIsModalOpen(false);
              }}
            >
              Build Again
            </Button>,
          ]}
        />
      </Modal>
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const categoriesRes = await fetch(`${process.env.API_URL}/api/v1/category`);
  // const productsRes = await fetch(`${process.env.API_URL}/api/v1/products`);
  const categories = await categoriesRes.json();
  // const products = await productsRes.json();
  // console.log(products);

  return {
    props: {
      categories: categories?.data || [],
      // products: products?.data || [],
    },
  };
};
