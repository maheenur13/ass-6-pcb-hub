import { useWindowSize } from "@/hooks/useWindowSize";
import { useGetCategoriesQuery } from "@/redux/features/category/category.api";
import { setAuthModalOpen } from "@/redux/features/user/user.slice";
import { useAppDispatch } from "@/redux/hook";
import { Avatar, Button, Dropdown, Menu } from "antd";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginSection from "../auth/Login";
import MobileHeader from "./MobileHeader";

const HeaderSection = () => {
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const { data: session } = useSession();

  const [categoryItems, setCategoryItems] = useState([]);
  const { data: categoryData, isLoading } = useGetCategoriesQuery(undefined);

  useEffect(() => {
    if (!isLoading && categoryData) {
      setCategoryItems(
        [...categoryData.data].map((item) => ({
          key: item._id,
          label: (
            <Link href={`/category/${item._id}`}>{item.categoryName}</Link>
          ),
        }))
      );
    }
  }, [categoryData, isLoading]);

  return (
    <div className="flex justify-between">
      <div className="demo-logo ">
        <Link href={"/"}>PCB HUB</Link>
      </div>
      {width >= 500 ? (
        <>
          <Menu theme="dark" className="ms-auto ">
            <Dropdown
              menu={{ items: categoryItems }}
              className="me-2"
              placement="bottomRight"
              arrow
            >
              <Button>Categories</Button>
            </Dropdown>
            <Button type="primary">
              <Link href={"/pc-builder"}>PC Builder</Link>
            </Button>

            {!session?.user && (
              <Button
                type="primary"
                onClick={() => dispatch(setAuthModalOpen(true))}
                danger
                className="ms-2"
              >
                Sign In
              </Button>
            )}
            {session?.user && (
              <span className="ms-2">
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: <p>{session.user.email}</p>,
                      },
                      {
                        key: "2",
                        label: (
                          <Button danger onClick={() => signOut()}>
                            Logout
                          </Button>
                        ),
                      },
                    ],
                  }}
                  placement="bottomCenter"
                  arrow
                >
                  <Button type="text">
                    <Avatar
                      size={35}
                      src={
                        <Image
                          width={100}
                          height={100}
                          layout="responsive"
                          src={session?.user?.image}
                          alt="avatar"
                        />
                      }
                    />
                  </Button>
                </Dropdown>

                {/* <Button
            type="primary"
            onClick={() => signOut()}
            danger
            className="ms-2"
          >
            Sign Out
          </Button> */}
              </span>
            )}
          </Menu>
        </>
      ) : (
        <div className="text-right ">
          <MobileHeader />
        </div>
      )}
      <LoginSection />
    </div>
  );
};

export default HeaderSection;
