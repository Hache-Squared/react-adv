import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import "../styles/custom-styles.css"
const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

            <ProductCard 
                className="bg-dark text-white"
                product={product}>
                <ProductImage className={"custom-image"}/>
                
                <ProductTitle className="text-bold"/>
                <ProductButtons  
                    className='custom-buttons'
                />
            </ProductCard>

            <ProductCard 
                className="bg-dark text-white"
                product={product}>
                <ProductCard.Image
                    className={"custom-image"}
                />
                
                <ProductCard.Title 
                    title='cafe'
                    className="text-bold"
                />
                <ProductCard.Buttons   
                    className='custom-buttons'   
                />
            </ProductCard>

            <ProductCard 
                style={{
                    backgroundColor: '#70D1F8',
                }}
                product={product}>
                <ProductCard.Image
                    style={{
                        width: '100%',
                    }}
                />
                
                <ProductCard.Title 
                    title='cafe'
                    style={{
                        color: 'blue',
                    }}
                    
                />
                <ProductCard.Buttons   
                    style={{
                        backgroundColor: 'red',
                    }}
                />
            </ProductCard>
            
        </div>

        


    </div>
  )
}
