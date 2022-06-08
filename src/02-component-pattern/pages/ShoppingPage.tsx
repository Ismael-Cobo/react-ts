import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components/Product';

import '../styles/product.css'

const product = {
  id: '1',
  title: 'Coffee mug',
  img: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard
          product={product}
          className='bg-dark text-white'
        >

          <ProductImg className='custom-image' />
          <ProductTitle />
          <ProductButtons className='custom-buttons' />

        </ProductCard>

        <ProductCard product={product}>

          <ProductImg />
          <ProductTitle title='pepe' />
          <ProductButtons />

        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: 'red', color: 'white' }}>

          <ProductImg />
          <ProductTitle />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'center'
          }} />

        </ProductCard>

      </div>


    </div>
  )
}
