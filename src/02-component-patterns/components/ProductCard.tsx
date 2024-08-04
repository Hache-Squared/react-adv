import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { createContext, ReactElement, useContext, useState } from 'react'
import { useProduct } from '../hooks'

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}
const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductImage = ({img = ''}) => {
    const { product} = useContext(ProductContext)
    let imgToShow = ""

    if(img) {
        imgToShow = img;
    }else if( product.img ){
        imgToShow = product.img
    }else{
        imgToShow = noImage;
    }

    return(
        <img 
            className={styles.productImg} 
            src={imgToShow} 
            alt="Product Image" />
    )
}

export const ProductTitle = ({title}: {title?: string}) => {
    const { product } = useContext(ProductContext);
    
    return(
        <span className={styles.productDescription}>
         {
            title ? title : product.title
         }
        </span>
    )
}

export const ProductButtons = () => {
    const { counter, increaseBy } = useContext(ProductContext)
    return(
        <div className={styles.buttonsContainer}>
            <button 
                onClick={() => increaseBy( -1 ) }
                className={styles.buttonMinus}>-</button>

            <div className={styles.countLabel}>{counter}</div>

            <button 
                onClick={() => increaseBy( 1 ) }
                className={styles.buttonAdd}>+</button>
        </div>
    )
}

export const ProductCard = ({ children ,product } : Props) => {
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
{/*         
        <ProductImage img={product.img}/>
        <ProductTitle title={product.title}/>

        <ProductButtons
            counter={counter}
            increaseBy={increaseBy}
        /> */}

        


    </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
