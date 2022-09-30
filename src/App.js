import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import products from "./products.json"
import Product from './components/Product';
import Basket from './components/Basket';
import "./main.css"




function App() {

  const [money, setMoney] = useState(1000000)

  const [basket, setBasket] = useState([])

  const [total, setTotal] = useState(0)




  useEffect(() => {

    setTotal(basket.reduce((accumulator, currentValue) => {

      return accumulator + ((currentValue.amount) * products.find((product) => product.id === currentValue.id).price)

    }, 0))




  }, [basket])


  return (
    <div className="App">
      <Header total={total} money={money} />

      <div className='products-container'>

        {
          products.map((product) => {

            return < Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />

          })

        }



      </div>

    
        {
          (total > 0) ?

            < Basket basket={basket} products={products} setBasket={setBasket} total={total} />

            :

            null
        }



    





    </div>
  );
}

export default App;
