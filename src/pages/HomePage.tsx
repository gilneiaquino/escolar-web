import React from 'react';
import PerfilUsuario from '../app/painel/PerfilUsuario';
import MateriaisCurso from '../app/painel/MateriaisCurso';

const HomePage: React.FC = () => {
  return (
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Plataforma de Ensino a Distância</title>
      <body>
        <header>
          <h1>Plataforma de Ensino a Distância</h1>
          <nav>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Cursos</a></li>
              <li><a href="#">Minha Conta</a></li>
              <li><a href="#">Sair</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="destaques">
            <h2>Cursos em Destaque</h2>
            <div className="curso">
              <img src="curso1.jpg" alt="Curso 1" />
              <h3>Curso de Programação Web</h3>
              <p>Domine as habilidades necessárias para criar sites e aplicativos web.</p>
              <a href="#">Inscrever-se</a>
            </div>
            <div className="curso">
              <img src="curso2.jpg" alt="Curso 2" />
              <h3>Curso de Design Gráfico</h3>
              <p>Aprenda a criar designs incríveis para impressão e mídias digitais.</p>
              <a href="#">Inscrever-se</a>
            </div>
          </section>

          <section className="meus-cursos">
            <h2>Meus Cursos</h2>
            <div className="curso">
              <img src="curso3.jpg" alt="Curso 3" />
              <h3>Curso de Desenvolvimento Mobile</h3>
              <p>Aprenda a criar aplicativos para dispositivos móveis iOS e Android.</p>
              <a href="#">Continuar</a>
            </div>
            <div className="curso">
              <img src="curso4.jpg" alt="Curso 4" />
              <h3>Curso de Marketing Digital</h3>
              <p>Descubra estratégias eficazes de marketing online para impulsionar seus negócios.</p>
              <a href="#">Continuar</a>
            </div>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 Plataforma de Ensino a Distância</p>
        </footer>
      </body>
    </html>

  );
};

export default HomePage;
