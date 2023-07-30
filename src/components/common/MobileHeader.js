import { useGetCategoriesQuery } from "@/redux/features/category/category.api";
import { setAuthModalOpen } from "@/redux/features/user/user.slice";
import { useAppDispatch } from "@/redux/hook";
import { PicRightOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileHeader = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const [categoryItems, setCategoryItems] = useState([]);
  const { data: categoryData, isLoading } = useGetCategoriesQuery(undefined);

  useEffect(() => {
    if (!isLoading && categoryData) {
      setCategoryItems(
        [...categoryData.data].map((item) => ({
          key: item._id,
          label: (
            <Link onClick={() => setOpen(false)} href={`/category/${item._id}`}>
              {item.categoryName}
            </Link>
          ),
        }))
      );
    }
  }, [categoryData, isLoading]);

  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Button
        type="text"
        onClick={showDrawer}
        icon={<PicRightOutlined style={{ color: "#ffffff", fontSize: 22 }} />}
      />
      <Drawer
        title="PCB HUB"
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        key={placement}
        footer={
          <div>
            {session?.user ? (
              <Button className="w-full" danger onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => {
                  onClose();
                  dispatch(setAuthModalOpen(true));
                }}
                danger
                type="primary"
                className="w-full"
              >
                Sign In
              </Button>
            )}
          </div>
        }
      >
        <div>
          <Link href={"/pc-builder"}>
            <Button type="primary" className="w-full" onClick={onClose}>
              PC Builder
            </Button>
          </Link>
          {session?.user && (
            <h5>
              <span className="text-slate-700">Logged in as: </span>
              {session?.user?.name}
            </h5>
          )}
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={categoryItems}
        />
      </Drawer>
    </>
  );
};

export default MobileHeader;
