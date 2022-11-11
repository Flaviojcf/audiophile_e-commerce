import { useState } from 'react'
import { ItemCounter } from '../../../../components/ItemCounter'
import { ProductType } from '../../../Products'
import { ButtonsContainer, FeaturesContainer, ImageContainer, IncludesContainer, ProductAdditionalInfo, ProductCard, ProductCardContent, ProductInfoContainer } from './styles'

type ProductInfoProps = {
  product: ProductType
}

export function ProductInfo ({ product }: ProductInfoProps) {
  const [itemCounter, setItemCounter] = useState(1)

  return (
    <ProductInfoContainer>
      <ProductCard>
        <ImageContainer>
          <img src={product.imageUrl} />
        </ImageContainer>

        <ProductCardContent>
          {product.isNew && <span>NEW PRODUCT</span>}

          <strong>{product.name}</strong>

          <p>{product.description}</p>

          <strong className='price'>
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

            <button>ADD TO CART</button>
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
          {product?.includes?.map(includedItem => (
            <li key={includedItem.item}>
              <span>{includedItem.quantity}x</span>
              <strong>{includedItem.item}</strong>
            </li>
          ))}

        </IncludesContainer>
      </ProductAdditionalInfo>
    </ProductInfoContainer>
  )
}
