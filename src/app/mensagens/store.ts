// store.ts

import { configureStore } from "@reduxjs/toolkit";
import mensagensReducer from "./mensagensSlice";

export const store = configureStore({
  reducer: {
    mensagens: mensagensReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
