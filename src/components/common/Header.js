import { setAuthModalOpen } from "@/redux/features/user/user.slice";
import { useAppDispatch } from "@/redux/hook";
import { Button, Dropdown, Menu } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import LoginSection from "../auth/Login";
import { headerItems } from "./constants";

const HeaderSection = () => {
  const dispatch = useAppDispatch();

  const { data: session } = useSession();

  console.log("geader", session);

  useEffect(() => {}, []);
  return (
    <>
      <div className="demo-logo" />

      <Menu theme="dark" className="ms-auto">
        <Dropdown
          menu={{ items: headerItems }}
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
          <Button
            type="primary"
            onClick={() => signOut()}
            danger
            className="ms-2"
          >
            Sign Out
          </Button>
        )}
        <LoginSection />
      </Menu>
    </>
  );
};

export default HeaderSection;
