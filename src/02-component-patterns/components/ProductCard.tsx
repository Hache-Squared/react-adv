import { createContext, CSSProperties, ReactElement, useContext, useState } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks'
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/Interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs) => void,
    value?: number
}

export const ProductCard = ({ children ,product, className, style, onChange, value } : Props) => {
  const { counter, increaseBy } = useProduct({ 
    onChange, 
    product,
    value
  })

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>

    
    <div 
     style={style}
    className={`${styles.productCard} ${className}`}>

        {
            children
        }
    </div>
    </Provider>
  )
}
