import * as Dialog from '@radix-ui/react-dialog'
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
  return (
    <Dialog.Portal>
      <ModalOverlay />
      <ModalContent>
        <ModalTitle>
          <p>CART (3)</p>
          <button>Remove all</button>
        </ModalTitle>
        <MainContainer>
          <ProductContainer>
            <MiniProductContainer>
              <img
                src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                alt=""
              />
            </MiniProductContainer>
            <TextContainer>
              <p><strong>XX99 MK II</strong></p>
              <p>$ 2,999</p>
            </TextContainer>
            <CounterOfProductContainer>
              <span>-</span>
              <p>
                <strong>1</strong>
              </p>
              <span>+</span>
            </CounterOfProductContainer>
          </ProductContainer>
          <ProductContainer>
            <MiniProductContainer>
              <img
                src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                alt=""
              />
            </MiniProductContainer>
            <TextContainer>
              <p><strong>XX99 MK II</strong></p>
              <p>$ 2,999</p>
            </TextContainer>
            <CounterOfProductContainer>
              <span>-</span>
              <p>
                <strong>1</strong>
              </p>
              <span>+</span>
            </CounterOfProductContainer>
          </ProductContainer>
          <ProductContainer>
            <MiniProductContainer>
              <img
                src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                alt=""
              />
            </MiniProductContainer>
            <TextContainer>
              <p><strong>XX99 MK II</strong></p>
              <p>$ 2,999</p>
            </TextContainer>
            <CounterOfProductContainer>
              <span>-</span>
              <p>
                <strong>1</strong>
              </p>
              <span>+</span>
            </CounterOfProductContainer>
          </ProductContainer>

          <TotalContainer>
            <p>TOTAL</p>
            <p><strong>$ 5,396</strong></p>
          </TotalContainer>
          <ButtonContainer>
            <button>CHECKOUT</button>
          </ButtonContainer>
        </MainContainer>
      </ModalContent>
    </Dialog.Portal>
  )
}
