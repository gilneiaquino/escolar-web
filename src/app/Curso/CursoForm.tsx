import React, { useState } from 'react';
import { Curso } from '../modelos/Curso';
import { Conquista } from '../modelos/Conquista';

const CursoForm: React.FC<{}> = () => {
    const [novoCurso, setNovoCurso] = useState<Curso>({
        titulo: '',
        progresso: 0,
        conquistas: [],
        descricaoResumida: '',
        descricaoCompleta: '',
        cor: '',
        agrupamento: '',
    });

    const opcoesAgrupamento = ['Frontend', 'Backend', 'Outro'];

    const exemplosConquistas: Conquista[] = [
        { titulo: 'Certificado de Iniciante', descricao: 'Concluiu o módulo de iniciantes.' },
        { titulo: 'Certificado de Conclusão', descricao: 'Concluiu o curso com sucesso.' },
        { titulo: 'Conquista Avançada', descricao: 'Alcançou o nível avançado neste curso.' },
    ];

    const coresPredefinidas = [
        { nome: 'Azul', valor: 'bg-primary' },
        { nome: 'Verde', valor: 'bg-success' },
        { nome: 'Vermelho', valor: 'bg-danger' },
        { nome: 'Amarelo', valor: 'bg-warning' },
        { nome: 'Cinza', valor: 'bg-secondary' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNovoCurso({ ...novoCurso, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Limpar o estado após o envio
        setNovoCurso({
            titulo: '',
            progresso: 0,
            conquistas: [],
            descricaoResumida: '',
            descricaoCompleta: '',
            cor: '',
            agrupamento: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className="card my-3">
                    <div className="card-header">
                        Dados Cadastrais
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="titulo" className="form-label">Título</label>
                                <input type="text"
                                    className="form-control"
                                    id="titulo"
                                    name="titulo"
                                    value={novoCurso.titulo}
                                    onChange={handleChange} required />
                            </div>
                            <div className="col-md-1 mb-3">
                                <label htmlFor="progresso" className="form-label">Progresso</label>
                                <input type="number"
                                    className="form-control"
                                    id="progresso"
                                    name="progresso"
                                    value={novoCurso.progresso}
                                    onChange={handleChange} required />
                            </div>
                            <div className="col-md-2 mb-3">
                                <label htmlFor="cor" className="form-label">Cor do Curso:</label>
                                <select
                                    id="cor"
                                    name="cor"
                                    className="form-select"
                                    value={novoCurso.cor}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Selecione</option>
                                    {coresPredefinidas.map((cor, index) => (
                                        <option key={index} value={cor.valor}>
                                            {cor.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-2 mb-3">
                                <label htmlFor="agrupamento" className="form-label">Agrupamento</label>
                                <select
                                    id="agrupamento"
                                    name="agrupamento"
                                    className="form-select"
                                    value={novoCurso.agrupamento}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Selecione</option>
                                    {opcoesAgrupamento.map((opcao, index) => (
                                        <option key={index} value={opcao}>{opcao}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="conquistas" className="form-label">Conquistas</label>
                                <select
                                    id="conquistas"
                                    name="conquistas"
                                    className="form-select"
                                    value={novoCurso.conquistas}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Selecione</option>
                                    {exemplosConquistas.map((conquista, index) => (
                                        <option key={index} value={conquista.titulo}>
                                            {conquista.titulo}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="descricaoResumida" className="form-label">Descrição Resumida</label>
                                <textarea className="form-control"
                                    id="descricaoResumida"
                                    name="descricaoResumida"
                                    value={novoCurso.descricaoResumida}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="descricaoCompleta" className="form-label">Descrição Completa</label>
                                <textarea className="form-control"
                                    id="descricaoCompleta"
                                    name="descricaoCompleta"
                                    value={novoCurso.descricaoCompleta}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CursoForm;
