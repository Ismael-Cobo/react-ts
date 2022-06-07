import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components/ProductCard';

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
          <ProductTitle title={product.title} />
          <ProductButtons increasedBy={function (value: number): void {
            throw new Error('Function not implemented.');
          }} counter={0} />

        </ProductCard>

      </div>


    </div>
  )
}
