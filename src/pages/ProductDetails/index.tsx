// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCategoriesNavigator } from '../../components/ProductCategoriesNavigator'
import { GoBackButton, ProductDetailsContainer, ProductDetailsContent } from './styles'

export function ProductDetails () {
  const navigate = useNavigate()

  return (
    <ProductDetailsContainer className='container'>
      <GoBackButton
        onClick={() => navigate(-1)}
      >
        Go Back
      </GoBackButton>

      <ProductDetailsContent>

      </ProductDetailsContent>

      <ProductCategoriesNavigator />
    </ProductDetailsContainer>
  )
}
