import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import { ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MoralisProvider initializeOnMount={false}>
     <ThirdwebProvider
      clientId="be0affd67addc9d5c43edd6c1b3097f8" // You can get a client id from dashboard settings
      activeChain="goerli"
      >
    <NotificationProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </NotificationProvider>
    </ThirdwebProvider>
  </MoralisProvider>
);
