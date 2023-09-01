
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Menu from './app/menu/Menu';
import AppRouter from './AppRouter';

function App() {
  return (
    <div>
      <Menu />
      <AppRouter />
    </div>
  );
}

export default App;
