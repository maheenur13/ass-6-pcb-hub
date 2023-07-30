import { Layout, theme } from "antd";
import FooterSection from "../common/Footer";
import HeaderSection from "../common/Header";

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <HeaderSection />
        {/* <NewHeader /> */}
      </Header>
      <Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          padding: 0,
        }}
      >
        <FooterSection />
      </Footer>
    </Layout>
  );
};
export default RootLayout;
