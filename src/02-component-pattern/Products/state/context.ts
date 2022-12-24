import { createContext } from 'react'
import { ProductModel } from '../../model'

type ProductContextModel = {
  product: ProductModel
  increasedBy: (value: number) => void
  value: number
}

// export const ProductContext = createContext<ProductContextModel>({
//     product: {
//         id: '',
//         title: ''
//     },
//     value: 0,
//     increasedBy: () => { },
// })

export const ProductContext = createContext({} as ProductContextModel)
