import { useState } from 'react'

interface Props {
  max?: number
  initialValue?: number
}

interface IUseProducts {
  counter: number
  increasedBy: (value: number) => void
}

export const useProducts = ({ max, initialValue }: Props): IUseProducts => {
  const [counter, setCounter] = useState<number>(initialValue || 0)

  const increasedBy = (value: number): void => {
    setCounter((prev) => Math.max(prev + value, max || 0))
  }

  return {
    counter,
    increasedBy,
  }
}
