import { useEffect, useRef, useState } from 'react';
import { Product, OnChangeArgs } from '../interfaces/productInterface';


interface Props {
  onChange?: (args: OnChangeArgs) => void
  product: Product
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: Props) => {


  const [counter, setCounter] = useState(value)

  const isControlled = useRef(!!onChange)

  const increasedBy = (value: number) => {


    if (isControlled.current) {

      return onChange!({ count: value, product })
    }

    let newValue = Math.max(counter + value, 0)

    setCounter(newValue)

    onChange && onChange({ product, count: newValue })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increasedBy
  }
}