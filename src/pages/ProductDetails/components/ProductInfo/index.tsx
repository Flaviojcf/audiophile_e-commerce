import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { ItemCounter } from '../../../../components/ItemCounter'
import { useCartContext } from '../../../../hooks/useCartContext'
import { ProductType } from '../../../Products'
import {
  ButtonsContainer,
  FeaturesContainer,
  ImageContainer,
  IncludesContainer,
  ProductAdditionalInfo,
  ProductCard,
  ProductCardContent,
  ProductInfoContainer
} from './styles'

type ProductInfoProps = {
  product: ProductType;
};

interface ProductProps {
  id: string;
  img: string;
  price: number;
  amount: number;
  totalPrice: number;
}

export function ProductInfo ({ product }: ProductInfoProps) {
  const [itemCounter, setItemCounter] = useState(1)
  const { onAddProductToCart } = useCartContext()

  function handleClick (productInfos: ProductProps) {
    toast.success('Produto adicionado ao carrinho!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
    onAddProductToCart(productInfos)
    setItemCounter(1)
  }

  return (
    <ProductInfoContainer>
      <ToastContainer/>
      <ProductCard>
        <ImageContainer>
          <img src={product.imageUrl} />
        </ImageContainer>

        <ProductCardContent>
          {product.isNew && <span>NEW PRODUCT</span>}

          <strong>{product.name}</strong>

          <p>{product.description}</p>

          <strong className="price">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(product.price)}
          </strong>

          <ButtonsContainer>
            <ItemCounter
              count={itemCounter}
              changeCountValue={setItemCounter}
            />

            <button
              onClick={() =>
                handleClick({
                  id: product.name,
                  img: product.imageUrl,
                  price: product.price,
                  amount: itemCounter,
                  totalPrice: product.price * itemCounter
                })
              }
            >
              ADD TO CART
            </button>
          </ButtonsContainer>
        </ProductCardContent>
      </ProductCard>

      <ProductAdditionalInfo>
        <FeaturesContainer>
          <strong>FEATURES</strong>
          {product.features.split('\n\n').map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}
        </FeaturesContainer>

        <IncludesContainer>
          <strong>IN THE BOX</strong>
          <ul>
            {product?.includes?.map((includedItem) => (
              <li key={includedItem.item}>
                <span>{includedItem.quantity}x</span>
                <strong>{includedItem.item}</strong>
              </li>
            ))}
          </ul>
        </IncludesContainer>
      </ProductAdditionalInfo>
    </ProductInfoContainer>
  )
}
