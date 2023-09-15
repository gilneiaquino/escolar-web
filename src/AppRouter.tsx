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

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aluno-form" element={<AlunoForm />} />
        <Route path="/aluno-form/:id" element={<AlunoForm />} />
        <Route path="/aluno-list-consulta" element={<AlunoConsultaList />} />
        <Route path="/perguntas-form" element={<PerguntasForm />} />
        <Route path="/calendario-entrega-trabalhos" element={<CalendarioEventos />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/certificado" element={<Certificado />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
