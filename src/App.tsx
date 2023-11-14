

import './App.css';
import Menu from './app/menu/Menu';
import AppRouter from './AppRouter';
import { Provider } from "react-redux"; // Importe o Provider do react-redux
 import ListaDeMensagens from './app/mensagens/ListaDeMensagens';
import store from './app/Reduce/store';
 

function App() {
  return (
    <div>
      <Provider store={store}>
        <Menu />
        <ListaDeMensagens/>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
