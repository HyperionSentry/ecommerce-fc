import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const greeting = 'Bienvenido'

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {greeting}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
