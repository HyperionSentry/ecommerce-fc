import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Context/CartContext';



function App() {
  const greeting = 'Bienvenido'

  return (
    <BrowserRouter>
        <CartContextProvider>
          <div className="App">
            <NavBar/>
            <Routes>        
              <Route path ="/" element ={<ItemListContainer greeting = {greeting}/>}/>
              <Route path ="/detalle/:detalleId" element ={<ItemDetailContainer/>}/>
              <Route path ="/categoria/:categoriaTipo" element ={<ItemListContainer/>}/>
              <Route path ="/categoria/Todas" element ={<Navigate to = "/"/>} />
              <Route path ="/cart" element ={<Cart/>}/>
              <Route path ="/*" element ={<Navigate to = "/"/>} />
            </Routes>
          </div>
        </CartContextProvider>


    </BrowserRouter>
  );
}

export default App;
