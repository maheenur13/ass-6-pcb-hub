import AntdRegistry from "@/libs/AntdRegistry";
import store from "@/redux/store";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      <AntdRegistry>
        <ConfigProvider>
          <SessionProvider session={pageProps.session}>
            {getLayout(<Component {...pageProps} />)}
          </SessionProvider>
        </ConfigProvider>
      </AntdRegistry>
    </Provider>
  );
}
