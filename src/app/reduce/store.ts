// store.ts

import { configureStore } from "@reduxjs/toolkit";
import mensagensReducer from "../mensagens/mensagensSlice";

const store = configureStore({
  reducer: {
    mensagens: mensagensReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
