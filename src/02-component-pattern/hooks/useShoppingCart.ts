import { useState } from 'react';
import { OnChangeArgs, ProductInCart } from '../interfaces/productInterface';


export const useShoppingCart = () => {



  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onChange = ({ product, count }: OnChangeArgs) => {

    setShoppingCart(prev => {


      const productInCart: ProductInCart = shoppingCart[product.id] || { ...product, count: 0 }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count

        return { ...prev, [productInCart.id]: productInCart }
      }

      const { [product.id]: toDelete, ...rest } = prev
      return rest

    })

  }


  return {
    shoppingCart,
    onChange
  }
}