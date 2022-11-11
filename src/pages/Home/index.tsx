import { ProductCategoriesNavigator } from '../../components/ProductCategoriesNavigator'
import { Speaker } from '../../components/Speaker'
import { HomeContainer, HomeContent } from './styles'

export function Home () {
  return (
    <HomeContainer>
      <HomeContent>
        <ProductCategoriesNavigator />
      </HomeContent>
      <Speaker />
    </HomeContainer>
  )
}
