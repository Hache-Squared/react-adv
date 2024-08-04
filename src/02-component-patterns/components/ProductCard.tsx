import { createContext, ReactElement, useContext, useState } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks'
import { ProductContextProps, ProductCardProps } from '../interfaces/Interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;




export const ProductCard = ({ children ,product } : ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>

    
    <div className={styles.productCard}>

        {
            children
        }
    </div>
    </Provider>
  )
}
