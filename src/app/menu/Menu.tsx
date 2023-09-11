
const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/aluno-form">Cadastrar Aluno</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/aluno-list-consulta">Listar alunos</a>
                </li>
            
                
            </ul>
        </nav>
        

    );
};

export default Menu;