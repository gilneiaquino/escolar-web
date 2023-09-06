// ListaDeMensagens.tsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";

const ListaDeMensagens: React.FC = () => {
  const mensagens = useSelector((state: RootState) => state.mensagens.mensagens);

  return (
    <div className="container">
      {mensagens.map((mensagem, index) => (
        <div className={`container alert alert-${mensagem.tipo}`} role="alert" key={index}>
          {mensagem.texto}
        </div>
      ))}
    </div>
  );
};

export default ListaDeMensagens;
