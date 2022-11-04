import { CaretRight } from 'phosphor-react'
import { GoToShop, ProductCategoriesNavigatorContainer, ProductCategoryLink } from './styles'

import headphonesCategoryImg from '../../assets/categories/image-category-thumbnail-headphones.png'
import earphonesCategoryImg from '../../assets/categories/image-category-thumbnail-earphones.png'
import speakersCategoryImg from '../../assets/categories/image-category-thumbnail-speakers.png'

export function ProductCategoriesNavigator () {
  return (
    <ProductCategoriesNavigatorContainer>
      <ProductCategoryLink href={'/'}>
        <img src={headphonesCategoryImg} alt="HEADPHONE" />
        <strong>HEADPHONES</strong>
        <GoToShop>
          <span>SHOP</span>
          <CaretRight size={12} weight="bold" />
        </GoToShop>
      </ProductCategoryLink>

      <ProductCategoryLink href={'/'}>
        <img src={speakersCategoryImg} alt="SPEAKERS" />
        <strong>SPEAKERS</strong>
        <GoToShop>
          <span>SHOP</span>
          <CaretRight size={12} weight="bold" />
        </GoToShop>
      </ProductCategoryLink>

      <ProductCategoryLink href={'/'}>
        <img src={earphonesCategoryImg} alt="EARPHONES" className='last-image' />
        <strong>EARPHONES</strong>
        <GoToShop>
          <span>SHOP</span>
          <CaretRight size={12} weight="bold" />
        </GoToShop>
      </ProductCategoryLink>
    </ProductCategoriesNavigatorContainer >
  )
}
