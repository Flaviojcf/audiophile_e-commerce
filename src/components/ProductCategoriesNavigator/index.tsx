import { CaretRight } from 'phosphor-react'
import { GoToShop, ImageContainer, ProductCategoriesNavigatorContainer, ProductCategoryLink } from './styles'

import headphonesCategoryImg from '../../assets/categories/image-category-thumbnail-headphones.png'
import earphonesCategoryImg from '../../assets/categories/image-category-thumbnail-earphones.png'
import speakersCategoryImg from '../../assets/categories/image-category-thumbnail-speakers.png'

export function ProductCategoriesNavigator () {
  return (
    <ProductCategoriesNavigatorContainer>
      <ProductCategoryLink to={'/products/headphones'}>
        <ImageContainer>
          <img src={headphonesCategoryImg} alt="HEADPHONE" />
        </ImageContainer>

        <strong>HEADPHONES</strong>

        <GoToShop>
          <span>SHOP</span>
          <CaretRight size={12} weight="bold" />
        </GoToShop>
      </ProductCategoryLink>

      <ProductCategoryLink to={'/products/speakers'}>
        <ImageContainer>
          <img src={speakersCategoryImg} alt="SPEAKERS" />
        </ImageContainer>

        <strong>SPEAKERS</strong>

        <GoToShop>
          <span>SHOP</span>
          <CaretRight size={12} weight="bold" />
        </GoToShop>
      </ProductCategoryLink>

      <ProductCategoryLink to={'/products/earphones'} className="last-image">
        <ImageContainer>
          <img src={earphonesCategoryImg} alt="EARPHONES" className='last-image' />
        </ImageContainer>

        <strong>EARPHONES</strong>

        <GoToShop>
          <span>SHOP</span>
          <CaretRight size={12} weight="bold" />
        </GoToShop>
      </ProductCategoryLink>
    </ProductCategoriesNavigatorContainer >
  )
}
