import React from 'react';
import { clearToken } from '../Jwt/tokenSlice';
import { useDispatch } from 'react-redux';

const Menu: React.FC = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(clearToken()); 
        window.location.href = '/login';
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Aluno
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/aluno-form">Cadastrar</a></li>
                                <li><a className="dropdown-item" href="/aluno-list-consulta">Consultar</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/Sair">Sair</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Usuário
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/usuario-form">Cadastrar</a></li>
                                <li><a className="dropdown-item" href="/usuario-list-consulta">Consultar</a></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Curso
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/curso-form">Cadastrar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/cursos">Listar</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="/certificado">Certificado</a>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/login">Login</a>
                        </li>
                        <li>
                            <a className="nav-link active" href="#" onClick={logout}>Sair</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="busca" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Busca</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
