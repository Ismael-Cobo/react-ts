import { ProductCard } from "../components"
import { ProductModel } from "../model"
import { useState } from 'react';

const product1: ProductModel = {
  id: '1',
  title: 'Coffee mug',
  img: './coffee-mug.png'
}

const product2: ProductModel = {
  id: '2',
  title: 'Coffee mug 2'
}



export const ShoppingPage = () => {
  const [products, setProducts] = useState<ProductModel[]>([product1, product2])
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {
          products.map(p => (
            <ProductCard {...p} key={p.id} />
          ))
        }
      </div>


    </div>
  )
}
