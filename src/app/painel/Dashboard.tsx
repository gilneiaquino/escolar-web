import CalendarioEventos from './CalendarioEventos';
import MateriaisCurso from './MateriaisCurso';
import PerfilUsuario from './PerfilUsuario';

const Dashboard = () => {
    return (
        <div className="container mt-4">
            <h1>Painel do Aluno</h1>

            <div className="row">
                 <div className="col-md-3">
                    <PerfilUsuario></PerfilUsuario>
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                    <CalendarioEventos></CalendarioEventos>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-8">
                    {/* Acesso aos Materiais do Curso */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Acesso aos Materiais do Curso</h5>
                            <MateriaisCurso></MateriaisCurso>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    {/* Fórum de Discussão */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Fórum de Discussão</h5>
                            {/* Incluir componentes do fórum */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
