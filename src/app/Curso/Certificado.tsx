import React from 'react';

const certificado = ({
    nomeAluno: 'João da Silva',
    nomeCurso: 'Curso de Exemplo',
    cargaHoraria: 40,
    professor: 'Prof. Exemplo',
    data: '01 de Setembro de 2023',
    emitidoPor: 'Empresa Exemplo',
    dataInicio: new Date(),
    dataFim: new Date()
});

const Certificado: React.FC = () => {
    return (
        <div className='container'>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">CERTIFICADO DE CONCLUSÃO</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    {/*                     <Avatar imageUrl="/aluna.jpg" initials="AS" /> */}
                    <img src="/aluna.jpg" alt="Minha Imagem" />

                </div>
                <div className='col-md-5'>
                    {certificado.nomeAluno}
                    concluiu o curso online com carga horária estimada em {certificado.cargaHoraria} horas.
                    Finalizado em {certificado.dataFim.toISOString().split('T')[0]}
                </div>
            </div>
            <div className='row'>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-12">Curso: {certificado.nomeCurso}</h1>
                    </div>
                </div>
            </div>
            <p>Nome do Aluno: {certificado.nomeAluno}</p>
            <p>Curso: {certificado.nomeCurso}</p>
            <p>Carga Horária: {certificado.cargaHoraria} horas</p>
            <p>Professor: {certificado.professor}</p>
            <p>Data: {certificado.data}</p>
            <p>Emitido por: {certificado.emitidoPor}</p>
        </div>
    );
};


export default Certificado;
