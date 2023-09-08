// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlunoForm from './app/AlunoForm/AlunoForm';
import AlunoList from './app/AlunoList/AlunoList';
import HomePage from './pages/HomePage';
import PerguntasForm from './app/perguntas/PerguntasForm';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aluno-form" element={<AlunoForm />} />
        <Route path="/aluno-list" element={<AlunoList />} />
        <Route path="/perguntas-form" element={<PerguntasForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
