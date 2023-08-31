
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import AlunoForm from './app/alunos/AlunoForm';
import AlunoList from './app/alunos/AlunoList';
import Menu from './app/menu/Menu';

function App() {
  return (
<div>
      <Menu/>
      <AlunoForm />
      <AlunoList />
    </div>
  );
}

export default App;
