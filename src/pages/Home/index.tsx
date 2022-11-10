import { AudioGear } from '../../components/AudioGear'
import { ProductCategoriesNavigator } from '../../components/ProductCategoriesNavigator'
import { Speaker } from '../../components/Speaker'
import { HomeContainer, HomeContent } from './styles'

export function Home () {
  return (
    <HomeContainer>
      <HomeContent>
        <ProductCategoriesNavigator/>
      </HomeContent>
      <Speaker/>
      <AudioGear/>
    </HomeContainer>
  )
}
