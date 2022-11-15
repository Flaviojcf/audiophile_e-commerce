import { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Product } from '../../components/Product'
import { ProductCategoriesNavigator } from '../../components/ProductCategoriesNavigator'

import productsJSON from '../../data/products.json'
import { Container, Content, ProductsContainer } from './styles'

const ProductCategories = {
  headphones: 'headphones',
  speakers: 'speakers',
  earphones: 'earphones'
} as const

export type ProductType = {
  id: number
  slug: string
  name: string
  description: string
  isNew: boolean
  price: number
  features: string
  imageUrl: string
  category?: string
  includes?: {
    quantity: number
    item: string
  }[]
}

export function Products () {
  const [products, setProducts] = useState<ProductType[]>([])

  const { category } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    const productCategories = Object.keys(ProductCategories)

    if (!(productCategories.find((type) => type === category))) {
      navigate('/')
      return
    }

    const productsByCategory = productsJSON.filter(product => product.category === category)

    const mappedProducts: ProductType[] = productsByCategory.map(product => ({
      id: product.id,
      slug: product.slug,
      name: product.name,
      description: product.description,
      isNew: product.new,
      price: product.price,
      features: product.features,
      imageUrl: product.image.desktop,
      category: product.category
    }))

    setProducts(mappedProducts)
  }, [location.pathname])

  return (
    <Container>
      <Content className='container'>
        <ProductsContainer>
          {products.map((product, index) => {
            const isEven = index % 2 === 0

            return (
              <Product
                key={product.id}
                description={product.description}
                imageUrl={product.imageUrl}
                name={product.name}
                slug={product.slug}
                isNew={product.isNew}
                category={product.category!}
                contentPosition={isEven ? 'left' : 'right'}
              />
            )
          })}
        </ProductsContainer>

        <ProductCategoriesNavigator />
      </Content>
    </Container>
  )
}
