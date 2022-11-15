import * as Dialog from '@radix-ui/react-dialog'
import { useCartContext } from '../../hooks/useCartContext'
import {
  ButtonContainer,
  CounterOfProductContainer,
  MainContainer,
  MiniProductContainer,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  ProductContainer,
  TextContainer,
  TotalContainer
} from './styles'

export function CartModal () {
  const { productInCart, onRemove, totalPrice, onAddOrMinusAmountInCart } =
    useCartContext()

  function handleClick (id: string, type: string) {
    onAddOrMinusAmountInCart(id, type)
  }

  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent>
        <ModalTitle>
          <p>CART ({productInCart.length})</p>
          <button onClick={onRemove}>Remove all</button>
        </ModalTitle>
        <MainContainer>
          {productInCart.length > 0
            ? (
                productInCart.map((product) => (
              <ProductContainer key={product.id}>
                <MiniProductContainer>
                  <img src={product.img} />
                </MiniProductContainer>
                <TextContainer>
                  <p>
                    <strong>{product.id}</strong>
                  </p>
                  <p>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    }).format(product.price)}
                  </p>
                </TextContainer>
                <CounterOfProductContainer>
                  <span onClick={() => handleClick(product.id, '-')}>-</span>
                  <p>
                    <strong>{product.amount}</strong>
                  </p>
                  <span onClick={() => handleClick(product.id, '+')}>+</span>
                </CounterOfProductContainer>
              </ProductContainer>
                ))
              )
            : (
            <p>Carrinho vazio</p>
              )}
          <TotalContainer>
            <p>TOTAL</p>
            <p>
              <strong>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(totalPrice)}
              </strong>
            </p>
          </TotalContainer>
          <ButtonContainer>
            <button>CHECKOUT</button>
          </ButtonContainer>
        </MainContainer>
      </ModalContent>
    </Dialog.Portal>
  )
}
