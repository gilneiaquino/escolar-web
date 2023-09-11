// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PerguntasForm from './app/perguntas/PerguntasForm';
import AlunoConsultaList from './app/Aluno/AlunoConsultaList';
import AlunoForm from './app/Aluno/AlunoForm';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aluno-form/:id" element={<AlunoForm />} />
        <Route path="/aluno-list-consulta" element={<AlunoConsultaList />} />
        <Route path="/perguntas-form" element={<PerguntasForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
