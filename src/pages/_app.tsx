import type { FC } from "react";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "~/store/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
};

export default api.withTRPC(MyApp);
