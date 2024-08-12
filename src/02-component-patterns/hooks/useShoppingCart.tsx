import React, { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/Interfaces';
import { productsData } from '../data/products';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string] : ProductInCart}>({});
    const [products, setProducts] = useState(productsData);

    const onProductCountChange = ({ count,product } : {count: number, product: Product}) => { 
        console.log("Cambio");
        setShoppingCart( oldShoppingCart => {
            // const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0 }
            // if(Math.max(productInCart.count + count, 0) > 0){
            //     productInCart.count += count;
            //     return {
            //        ...oldShoppingCart,
            //         [product.id]: productInCart
            //     }
            // }
    
            // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
    
            // return rest;
    
    
            
            let newValue = {...oldShoppingCart}
            if (count === 0) {
                delete newValue[product.id]
                return {
                    ...newValue
                }
            }
            return {
                ...newValue,
                [product.id]: {
                   ...product,
                    count
                }
            }
            
        } )
        
      }
    
  return {
    shoppingCart,
    onProductCountChange,
    products
  }
}
