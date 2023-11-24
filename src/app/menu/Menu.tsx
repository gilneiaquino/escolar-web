import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AutenticacaoController from "../Jwt/AutenticacaoController";

const Menu: React.FC = () => {
    const logout = () => {
        AutenticacaoController.removeToken();
        window.location.href = '/login';
    };

    if (!AutenticacaoController.getToken()) {
        return null;
    }

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
                                Usuário
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/usuario-form">Cadastrar</a></li>
                                <li><a className="dropdown-item" href="/usuario-list-consulta">Consultar</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Perfil
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/alterar-minha-senha">Alterar Senha</a></li>
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
                        <li>
                            <a className="nav-link active" href="#" onClick={logout}>Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
    );
};

export default Menu;
