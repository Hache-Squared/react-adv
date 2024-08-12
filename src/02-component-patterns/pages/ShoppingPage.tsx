import { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { Product, ProductInCart } from '../interfaces/Interfaces'
import "../styles/custom-styles.css"
import { useShoppingCart } from '../hooks/useShoppingCart'


export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange, products} = useShoppingCart()
  
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

            {
                products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        className='bg-dark text-white'
                        value={ shoppingCart[product.id]?.count || 0}
                        onChange={ onProductCountChange }
                        
                    >
                        <ProductCard.Image
                            className={"custom-image"}
                        />
                        
                        <ProductCard.Title 
                            title={product.title}
                            className="text-bold"
                        />
                        <ProductCard.Buttons   
                            className='custom-buttons'   
                        />
                    </ProductCard>
                ))
            }
                
        </div>

        

        <div className='shopping-cart'>
            {
                Object.entries(shoppingCart ?? []).map(([id, product]) => (
                    <ProductCard 
                        key={id}
                        product={product}
                        className='bg-dark text-white'
                        style={{width:'100px'}}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductCard.Image
                            className={"custom-image"}
                        />
                        
                        <ProductCard.Buttons   
                            className='custom-buttons'  
                            style={{
                                display: 'flex',
                                justifyContent: 'center'

                            }} 
                        />
                    </ProductCard>
                ))
            }


            
        </div>
        

    </div>
  )
}
