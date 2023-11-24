import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import PerguntasForm from './app/perguntas/PerguntasForm';
import Cursos from './app/Curso/Cursos';
import Certificado from './app/Curso/Certificado';
import Login from './app/Login/Login';
import EsqueciMinhaSenha from './app/Login/EsqueciMinhaSenha';
import AlterarSenha from './app/Login/AlterarSenha';
import CursoForm from './app/Curso/CursoForm';
import UsuarioForm from './app/Usuario/UsuarioForm';
import UsuarioConsultaList from './app/Usuario/UsuarioConsultaList';
import TokenInvalido from './app/Login/TokenInvalido';
import RecuperarSenha from './app/Login/RecuperarSenha';
import autenticacaoController from "./app/Jwt/AutenticacaoController";
import AcessoNaoAutorizado from "./app/Login/AcessoNaoAutorizado";

const AppRouter = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = autenticacaoController.getToken();
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated ? <Navigate to="/cursos" /> : <Login />}
                />
                <Route path="/cursos" element={<Cursos />} />
                {/* Outras rotas públicas */}
                <Route path="/login" element={<Login />} />
                <Route path="/token-invalido" element={<TokenInvalido />} />
                <Route path="/esqueci-minha-senha" element={<EsqueciMinhaSenha />} />
                <Route path="/recuperar-minha-senha" element={<RecuperarSenha />} />
                <Route path="/alterar-minha-senha" element={<AlterarSenha />} />
                <Route path="/acesso-nao-autorizado" element={<AcessoNaoAutorizado />} />

                {/* Rotas privadas protegidas */}
                {isAuthenticated && (
                    <>
                        <Route path="/perguntas-form" element={<PerguntasForm />} />
                        <Route path="/curso-form" element={<CursoForm />} />
                        <Route path="/curso-form/:id" element={<CursoForm />} />
                        <Route path="/certificado" element={<Certificado />} />
                        <Route path="/usuario-form" element={<UsuarioForm />} />
                        <Route path="/usuario-form/:id" element={<UsuarioForm />} />
                        <Route
                            path="/usuario-list-consulta"
                            element={<UsuarioConsultaList />}
                        />
                    </>
                )}
            </Routes>

        </Router>
    );
};

export default AppRouter;
