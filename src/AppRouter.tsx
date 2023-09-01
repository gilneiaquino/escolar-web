// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlunoForm from './app/alunos/AlunoForm';
import AlunoList from './app/alunos/AlunoList';
import HomePage from './pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aluno-form" element={<AlunoForm />} />
        <Route path="/aluno-list" element={<AlunoList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
