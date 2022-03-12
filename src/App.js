import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';


const addToCart = () => {
  alert(`Se han agregado los libros al carrito.`)
}


function App() {
  const greeting = 'Bienvenido'

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {greeting}/>
      <ItemCount stock="5" initial= "1" onAdd={addToCart}/>
    </div>
  );
}

export default App;
