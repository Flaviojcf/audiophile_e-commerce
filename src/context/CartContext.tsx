import { createContext, ReactNode, useEffect, useState } from 'react'

type ProductInformations = {
  id: string;
  img: string;
  price: number;
  amount: number;
  totalPrice: number;
};

interface AddCartContextProps {
  onAddProductToCart: (data: ProductInformations) => void;
  onRemove: () => void;
  productInCart: ProductInformations[];
  totalPrice: number;
  onAddOrMinusAmountInCart: (id: string, type: string) => void;
}

interface CartContextProps {
  children: ReactNode;
}

export const AddCartContext = createContext({} as AddCartContextProps)

export function CartContextProvider ({ children }: CartContextProps) {
  const [productInCart, setProductInCart] = useState<ProductInformations[]>(
    () => {
      const storedProduct = localStorage.getItem('@ProductItems')
      console.log(storedProduct)
      if (storedProduct) {
        return JSON.parse(storedProduct)
      }
      return []
    }
  )

  const allTotalPricePerProduct = productInCart.map(
    (value) => value.totalPrice
  )
  const totalPrice = allTotalPricePerProduct.reduce(
    (currentValue, previousValue) => currentValue + previousValue,
    0
  )

  function onAddProductToCart (data: ProductInformations) {
    const newArrayProduct = [...productInCart]
    const getProductIndex = newArrayProduct.findIndex(
      (product) => product.id === data.id
    )
    if (getProductIndex === -1) {
      setProductInCart([...productInCart, data])
    } else {
      newArrayProduct[getProductIndex].amount += 1
      setProductInCart(newArrayProduct)
    }
  }

  function onAddOrMinusAmountInCart (id: string, type: string) {
    const newArrayProduct = [...productInCart]
    const getProductIndex = newArrayProduct.findIndex(
      (product) => product.id === id
    )
    if (type === '+') {
      newArrayProduct[getProductIndex].amount += 1
      newArrayProduct[getProductIndex].totalPrice = newArrayProduct[getProductIndex].price * newArrayProduct[getProductIndex].amount
      setProductInCart(newArrayProduct)
    } else if (type === '-') {
      if (newArrayProduct[getProductIndex].amount > 1) {
        newArrayProduct[getProductIndex].amount -= 1
        newArrayProduct[getProductIndex].totalPrice = newArrayProduct[getProductIndex].price * newArrayProduct[getProductIndex].amount
        setProductInCart(newArrayProduct)
      } else {
        const removeProduct = newArrayProduct.filter(
          (product) => product.id !== id
        )
        setProductInCart(removeProduct)
      }
    }
  }

  function onRemove () {
    setProductInCart([])
  }

  useEffect(() => {
    localStorage.setItem('@ProductItems', JSON.stringify(productInCart))
  }, [productInCart])

  return (
    <AddCartContext.Provider
      value={{
        onAddProductToCart,
        onRemove,
        productInCart,
        totalPrice,
        onAddOrMinusAmountInCart
      }}
    >
      {children}
    </AddCartContext.Provider>
  )
}
