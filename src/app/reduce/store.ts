// store.ts

import { configureStore } from "@reduxjs/toolkit";
import mensagensReducer from "../mensagens/mensagensSlice";
import tokenReducer from "../jwt/tokenSlice";

const store = configureStore({
  reducer: {
    mensagens: mensagensReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
