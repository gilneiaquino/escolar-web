// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PerguntasForm from './app/perguntas/PerguntasForm';
import AlunoConsultaList from './app/Aluno/AlunoConsultaList';
import AlunoForm from './app/Aluno/AlunoForm';
import CalendarioEventos from './app/painel/CalendarioEventos';
import Dashboard from './app/painel/Dashboard';
import Cursos from './app/Curso/Cursos';
import Certificado from './app/Curso/Certificado';
import Login from './app/Login/Login';
import EsqueciMinhaSenha from './app/Login/EsqueciMinhaSenha';
import AlterarSenha from './app/Login/AlterarSenha';
import CursoForm from './app/Curso/CursoForm';
import UsuarioForm from './app/Usuario/UsuarioForm';
import UsuarioConsultaList from './app/Usuario/UsuarioConsultaList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aluno-form" element={<AlunoForm />} />
        <Route path="/aluno-form/:id" element={<AlunoForm />} />
        <Route path="/aluno-list-consulta" element={<AlunoConsultaList />} />
        <Route path="/perguntas-form" element={<PerguntasForm />} />
        <Route path="/calendario-entrega-trabalhos" element={<CalendarioEventos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso-form" element={<CursoForm />} />        
        <Route path="/curso-form/:id" element={<CursoForm />} />        
        <Route path="/certificado" element={<Certificado />} />
        <Route path="/login" element={<Login />} />
        <Route path="/esqueci-minha-senha" element={<EsqueciMinhaSenha />} />
        <Route path="/alterar-minha-senha" element={<AlterarSenha />} />
        <Route path="/usuario-form" element={<UsuarioForm />} />
        <Route path="/usuario-form/:id" element={<UsuarioForm />} />
        <Route path="/usuario-list-consulta" element={<UsuarioConsultaList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
