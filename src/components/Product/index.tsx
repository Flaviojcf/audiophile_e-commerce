import { LinkButton } from '../LinkButton'
import { ImageContainer, ProductContainer, ProductContent } from './styles'

type ProductProps = {
  contentPosition: 'left' | 'right'
  isNew?: boolean
  name: string
  imageUrl: string
  description: string
  slug: string
  category: string
}

export function Product ({ contentPosition, description, imageUrl, name, slug, category, isNew = false }: ProductProps) {
  return (
    <ProductContainer contentPosition={contentPosition === 'left' ? 'left' : 'right'}>
      <ImageContainer>
        <img src={imageUrl} alt="" />
      </ImageContainer>

      <ProductContent isNewProduct={isNew}>
        <span>NEW PRODUCT</span>
        <strong>{name}</strong>
        <p>{description}</p>
        <LinkButton to={`/products/${category}/${slug}`} content={'SEE PRODUCT'} />
      </ProductContent>
    </ProductContainer>
  )
}
