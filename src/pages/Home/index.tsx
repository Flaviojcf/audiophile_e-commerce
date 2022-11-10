import { Product } from '../../components/Product'
import { HomeContainer, HomeContent } from './styles'

export function Home () {
  return (
    <HomeContainer>
      <HomeContent>
        <Product
          contentPosition='left'
          name='XX99 Mark I Headphones'
          description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
          imageUrl='/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
          slug='xx99-mark-one-headphones'
          isNew={true}
        />
        <Product
          contentPosition='right'
          name='XX59 Headphones'
          description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
          imageUrl='/assets/product-xx59-headphones/desktop/image-product.jpg'
          slug='xx59-headphones'
        />
      </HomeContent>
    </HomeContainer>
  )
}
