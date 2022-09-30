import React from 'react'
import BasketItem from './BasketItem'
import "../main.css"


function Basket({ basket,products,total,setBasket }) {
    return (
        <div className='basket'>

            {
                basket.map((item) => {
                    return < BasketItem key={item.id} item={item} product={products.find((product) => product.id === item.id)} />
                })


            }

            Toplam : $ {total}

            <br></br>
            <button onClick={()=>setBasket([])}>Reset Basket</button>

        </div>
    )
}

export default Basket
