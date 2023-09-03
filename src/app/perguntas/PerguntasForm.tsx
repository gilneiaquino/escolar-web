import React, { useState } from 'react';

const PerguntasForm = () => {
  const [pergunta, setPergunta] = useState('');
  const [respostas, setRespostas] = useState(['', '', '']);
  const [respostaCorreta, setRespostaCorreta] = useState('');

  const adicionarResposta = () => {
    setRespostas([...respostas, '']);
  };

  const handleChangeResposta = (index: number, texto: string) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = texto;
    setRespostas(novasRespostas);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode enviar os dados da pergunta para o seu backend ou fazer o que precisar
    console.log('Pergunta:', pergunta);
    console.log('Respostas:', respostas);
    console.log('Resposta Correta:', respostaCorreta);
  };

  return (
    <div className='container'>

      <div className="card my-3">
        <div className="card-header ">
          Cadastro de Perguntas
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group col-md-10 mx-sm-3 my-3">
              <label>Pergunta</label>
              <input
                className="form-control"
                type="text"
                value={pergunta}
                onChange={(e) => setPergunta(e.target.value)}
              />
            </div>
            <br />
            <label>Respostas:</label>
            <ul>
              {respostas.map((r, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={r}
                    onChange={(e) => handleChangeResposta(index, e.target.value)}
                  />
                  <label>
                    Correta:
                    <input
                      type="radio"
                      name="respostaCorreta"
                      value={index}
                      checked={respostaCorreta === index.toString()}
                      onChange={() => setRespostaCorreta(index.toString())}
                    />
                  </label>
                </li>
              ))}
            </ul>
            <button type="button" onClick={adicionarResposta}>
              Adicionar Resposta
            </button>
            <br />
            <button type="submit">Cadastrar Pergunta</button>
          </form>
        </div >
      </div>
    </div>
  );
};

export default PerguntasForm;
