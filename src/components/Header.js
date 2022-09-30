import React from 'react'
import { moneyFormat } from '../helpers'
import "../main.css"



export default function Header({money,total}) {
  return (
    <div className='header'>
        

      {
        total ? <>
          
              {
                  money-total > 0 ? <>harcayacak {moneyFormat(money-total)} <span>$ </span> paranız kaldı !</> : <>harcayacak hiç paranız kalmadı !</>

              }
              


          </> :  <>
          harcamak için {moneyFormat(money)} <span>$ </span> paranız kaldı !
          </>
      }


      

    </div>
  )
}
