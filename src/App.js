import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  const greeting = 'Bienvenido'

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {greeting}/>
    </div>
  );
}

export default App;
