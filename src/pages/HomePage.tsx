import React from 'react';
import UserProfile from '../app/painel/UserProfile';
import ResumoDoProgresso from '../app/painel/ResumoDoProgresso';

const HomePage: React.FC = () => {
  return (
    <div>
       <UserProfile></UserProfile>
       <ResumoDoProgresso></ResumoDoProgresso>
    </div>
  );
};

export default HomePage;
