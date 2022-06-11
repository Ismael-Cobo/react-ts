import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components/Product';
import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';

import '../styles/product.css'


export const ShoppingPage = () => {


  const { onChange, shoppingCart } = useShoppingCart()


  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div className='shopping-cart'>

        {
          Object.values(shoppingCart).map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onChange={onChange}
              value={product.count}
              className='bg-dark text-white'
              style={{
                width: '120px'
              }}
            >

              <ProductImg className='custom-image' />
              <ProductButtons
                className='custom-buttons'
              />

            </ProductCard>
          ))
        }

      </div>

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
              value={shoppingCart[product.id]?.count || 0}
              onChange={onChange}
            >

              <ProductImg className='custom-image' />
              <ProductTitle />
              <ProductButtons
                className='custom-buttons'
              />

            </ProductCard>
          ))
        }


      </div>
    </div>
  )
}
