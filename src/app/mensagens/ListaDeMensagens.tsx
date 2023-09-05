// ListaDeMensagens.tsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { removerMensagem } from "./mensagensSlice";
import { Mensagem } from "../modelos/Mensagem";

const ListaDeMensagens: React.FC = () => {
  const mensagens = useSelector((state: RootState) => state.mensagens.mensagens);
  const dispatch = useDispatch();

  const handleRemoverMensagem = (mensagem: Mensagem) => {
    dispatch(removerMensagem(mensagem));
  };

  return (
    <div>
      {mensagens.map((mensagem) => (
        <div className="alert alert-primary" role="alert" key={mensagem.id}>
          {mensagem.texto}{" "}
          <button
            onClick={() => handleRemoverMensagem(mensagem)}
            className="btn btn-danger"
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaDeMensagens;
