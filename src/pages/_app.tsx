import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "../features/store";
import { getCartTotal } from "@/features/cartSlice";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>
    </>
  );
};

export default MyApp;
