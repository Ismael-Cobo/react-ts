import { ProductModel } from "../model";
import { CardButtons, CardImg, CardTitle, ProductCard } from "../Products/components";
import '../Products/styles/styles.css';
const product1: ProductModel = {
  id: '1',
  title: 'Coffee mug',
  img: './coffee-mug.png'
}

const product2: ProductModel = {
  id: '2',
  title: 'Coffee mug 2'
}


let products = [product1, product2]

export const ShoppingPage = () => {

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1rem'
      }} className='bg-dark'>

        {
          products.map(p => (
            <ProductCard product={p} key={p.id} className='bg-dark text-white'>
              <CardImg className="custom-image" />
              <CardTitle className="text-white" style={{ padding: '10px', backgroundColor: 'rebeccapurple' }} />
              <CardButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>


    </div>
  )
}
