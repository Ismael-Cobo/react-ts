import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components/Product';

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

        <ProductCard product={product}>

          <ProductImg />
          <ProductTitle />
          <ProductButtons />

        </ProductCard>

        <ProductCard product={product}>

          <ProductImg />
          <ProductTitle title='pepe' />
          <ProductButtons />

        </ProductCard>

      </div>


    </div>
  )
}
