import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/index.css'
import { Router } from './router/Router.js'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./store/store.ts";
import { Provider } from 'react-redux';
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
