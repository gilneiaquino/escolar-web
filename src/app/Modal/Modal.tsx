import React, { ReactNode } from 'react';

interface ModalProps {
  id: string;
  titulo: string;
  conteudo: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, titulo, conteudo }) => {
  return (
    <div className="modal fade" id={id} role="dialog" aria-labelledby={`Titulo${id}`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`Titulo${id}`}>{titulo}</h5>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {conteudo}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" className="btn btn-primary">Salvar mudanças</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
