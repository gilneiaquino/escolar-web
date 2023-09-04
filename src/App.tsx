
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Menu from './app/menu/Menu';
import AppRouter from './AppRouter';
import Mensagem from './app/mensagens/Mensagem';

function App() {
  return (
    <div>
      <Menu />
      <Mensagem/>
      <AppRouter />
    </div>
  );
}

export default App;
