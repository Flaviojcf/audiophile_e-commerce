import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Product } from '../../components/Product'

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
}

export function Products () {
  const [products, setProducts] = useState<ProductType[]>([])

  const { category } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
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
      imageUrl: product.image.desktop
    }))

    setProducts(mappedProducts)
  }, [])

  return (
    <Container>
      <Content className='container'>
        <ProductsContainer>
          {products.map((product, index) => {
            const isEven = index % 2 === 0

            console.log(product.imageUrl)

            return (
              <Product
                key={product.id}
                description={product.description}
                imageUrl={product.imageUrl}
                name={product.name}
                slug={product.slug}
                isNew={product.isNew}
                contentPosition={isEven ? 'left' : 'right'}
              />
            )
          })}
        </ProductsContainer>
      </Content>
    </Container>
  )
}
