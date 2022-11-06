import { ProductCategoriesNavigator } from '../../components/ProductCategoriesNavigator'

import { HomeContainer, HomeContent } from './styles'

export function Home () {
  return (
    <HomeContainer>
      <HomeContent>
        <ProductCategoriesNavigator />
      </HomeContent>
    </HomeContainer>
  )
}
