// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductCategoriesNavigator } from '../../components/ProductCategoriesNavigator'
import { GoBackButton, ProductDetailsContainer, ProductDetailsContent } from './styles'

import productsJSON from '../../data/products.json'
import { ProductType } from '../Products'
import { ProductInfo } from './components/ProductInfo'

export function ProductDetails () {
  const [product, setProduct] = useState<ProductType>(null as any)

  const navigate = useNavigate()
  const { productSlug, category } = useParams()

  useEffect(() => {
    const productBySlugAndCategory = productsJSON.find(product => product.slug === productSlug && product.category === category)

    if (!productBySlugAndCategory) {
      navigate('/')
    }

    const formattedProduct: ProductType = {
      id: productBySlugAndCategory!.id,
      name: productBySlugAndCategory!.name,
      description: productBySlugAndCategory!.description,
      imageUrl: productBySlugAndCategory!.image.desktop,
      isNew: productBySlugAndCategory!.new,
      price: productBySlugAndCategory!.price,
      features: productBySlugAndCategory!.features,
      slug: productBySlugAndCategory!.slug,
      includes: productBySlugAndCategory!.includes
    }

    setProduct(formattedProduct)
  }, [])

  return (
    <ProductDetailsContainer className='container'>
      <GoBackButton
        onClick={() => navigate(-1)}
      >
        Go Back
      </GoBackButton>

      <ProductDetailsContent>
        {product && <ProductInfo product={product} />}
      </ProductDetailsContent>

      <ProductCategoriesNavigator />
    </ProductDetailsContainer>
  )
}
