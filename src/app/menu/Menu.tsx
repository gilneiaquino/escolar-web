
const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/alunos">Aluno</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">Professor</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">Matérias</a>
                </li>
            </ul>
        </nav>

    );
};

export default Menu;