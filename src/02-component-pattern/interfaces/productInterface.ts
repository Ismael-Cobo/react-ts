
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
