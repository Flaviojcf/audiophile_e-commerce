import { useContext } from 'react'
import { AddCartContext } from '../context/CartContext'

export function useCartContext () {
  const context = useContext(AddCartContext)

  return context
}
