import React, { useEffect, useState } from 'react'
import '../main.css';


export default function Product({product,basket,setBasket,total,money}) {

    const basketItem = basket.find((item) => item.id === product.id)

    

    const addBasket = () =>{ 

        const itemExist = basket.find((item) => item.id === product.id)

        if(itemExist){

            itemExist.amount +=1
            
                setBasket([...basket.filter((item) => item.id !== itemExist.id),itemExist])



        }else{
            setBasket([...basket,{
                "id":product.id,
                "amount":1
            }])

        }



    }

    const removeBasket = () =>{

        const itemExist = basket.find((item) => item.id === product.id)


        if(itemExist && itemExist.amount > 1){

            itemExist.amount -=1
            
                setBasket([...basket.filter((item) => item.id !== itemExist.id),itemExist])



        }else{
            setBasket(basket.filter((item)=> item.id !== product.id))

        }



    }


   



  return (
    <div className='product'>

            <img src={product.image} />
      
           <h3>{product.title}</h3>
            <div className="price">${product.price}  </div>
            <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
            {basketItem ? basketItem.amount : 0}
            <button disabled={money-total < product.price ? true  : false}  onClick={addBasket}>Satın Al</button>



    </div>
  )
}
