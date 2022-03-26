import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const greeting = 'Bienvenido'

  return (
    <BrowserRouter>

      <div className="App">
      <NavBar/>
        <Routes>        
          <Route path ="/" element ={<ItemListContainer greeting = {greeting}/>}/>
          <Route path ="/detalle/:detalleId" element ={<ItemDetailContainer/>}/>
          <Route path ="/categoria/:categoriaTipo" element ={<ItemDetailContainer/>}/>
          <Route path ="/*" element ={<Navigate to = "/"/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
