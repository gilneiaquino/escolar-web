// mensagensSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mensagem } from '../modelos/Mensagem';
import { EstadoMensagens } from '../modelos/EstadoMensagens';

const estadoInicial: EstadoMensagens = {
  mensagens: [],
};

const mensagensSlice = createSlice({
  name: 'mensagens',
  initialState: estadoInicial,
  reducers: {
    adicionarMensagem: (state, action: PayloadAction<Mensagem>) => {
      state.mensagens.push(action.payload);
    },
    removerMensagem: (state, action: PayloadAction<Mensagem>) => {
      state.mensagens = state.mensagens.filter((mensagem) => mensagem.id !== action.payload.id);
    },
    limparMensagens: (state) => {
      state.mensagens = [];
    }
  },
});

export const { adicionarMensagem, removerMensagem, limparMensagens } = mensagensSlice.actions;
export default mensagensSlice.reducer;
