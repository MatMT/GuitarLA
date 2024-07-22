import { useState, useEffect } from 'react'
import Header from './components/Header';
import Guitar from './components/Guitar';
import { db } from './data/db';

function App() {

  // Inicializar como un arreglo vacío
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExist >= 0) {
      // Copia mutable del estado actual
      const updatedCart = [...cart];

      // Incrementar cantidad en 1 del item
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    }

    // Inicializar cantidad en 1 del item
    item.quantity = 1;
    setCart([...precartState, item]);

  }

  return (
    <>

      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map((guitar) =>
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          )}

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
