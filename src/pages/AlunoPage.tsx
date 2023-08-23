import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select';


const estados = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];

const AlunoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    dataNascimento: '',
    genero: '',
    endereco: {
      id: '',
      rua: '',
      numero: '',
      cidade: '',
      estado: '',
      cep: '',
    },
    telefone: {
      tipo: '',
      numero: '',
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEstadoChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      setFormData({
        ...formData,
        endereco: {
          ...formData.endereco,
          estado: selectedOption.value,
        },
      });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Cadastro de alunos
        </div>
        <div className="card-body">
          <p className="card-text">
            <div className="row">
              <form>
                <div className="panel panel-default">
                <div>
                    <label>ID:</label>
                    <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label>Data de Nascimento:</label>
                    <InputMask
                      mask="99/99/9999"
                      type="text"
                      name="dataNascimento"
                      value={formData.dataNascimento}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Gênero:</label>
                    <input type="text" name="genero" value={formData.genero} onChange={handleInputChange} />
                  </div>
                  <div>
                    <label>Endereço:</label>
                    <div>
                      <input type="hidden" name="endereco.id" value={formData.endereco.id} />
                      <input
                        type="text"
                        name="endereco.rua"
                        value={formData.endereco.rua}
                        onChange={handleInputChange}
                        placeholder="Rua"
                      />
                      <input
                        type="text"
                        name="endereco.numero"
                        value={formData.endereco.numero}
                        onChange={handleInputChange}
                        placeholder="Número"
                      />
                      <input
                        type="text"
                        name="endereco.cidade"
                        value={formData.endereco.cidade}
                        onChange={handleInputChange}
                        placeholder="Cidade"
                      />
                      <Select
                        options={estados}
                        name="endereco.estado"
                        value={estados.find((option) => option.value === formData.endereco.estado)}
                        onChange={handleEstadoChange}
                        placeholder="Estado"
                      />
                      <InputMask
                        mask="99999-999"
                        type="text"
                        name="endereco.cep"
                        value={formData.endereco.cep}
                        onChange={handleInputChange}
                        placeholder="CEP"
                      />
                    </div>
                  </div>
                  <div>
                    <label>Telefone:</label>
                    <div>
                      <input
                        type="text"
                        name="telefone.tipo"
                        value={formData.telefone.tipo}
                        onChange={handleInputChange}
                        placeholder="Tipo"
                      />
                      <InputMask
                        mask="(99) 99999-9999"
                        type="text"
                        name="telefone.numero"
                        value={formData.telefone.numero}
                        onChange={handleInputChange}
                        placeholder="Número"
                      />
                    </div>
                  </div>
                </div>
                <input type='submit' >Enviar</input>
              </form>
            </div>
          </p>
        </div>
      </div>   
    </div>
  );
};

export default AlunoPage;
