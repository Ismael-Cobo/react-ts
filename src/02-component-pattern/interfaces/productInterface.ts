
export interface Product {
  id: string,
  title: string,
  img?: string
}

export interface ProductContextProps {
  counter: number,
  increasedBy: (value: number) => void,
  product: Product
}

export interface OnChangeArgs {
  product: Product,
  count: number,
}


export interface ProductInCart extends Product {
  count: number
}
