import { Button } from '../../../Button'
import { BlackContainer, Container, GrayContainer, TextContainer } from './styles'

export function GridComponent () {
  return (
    <Container>
      <BlackContainer>
          <img src="/assets/home/desktop/earphonesBitmapDesktop.png"/>
          <img src="/assets/home/tablet/earphonesBitmapTablet.png"/>
          <img src="/assets/home/mobile/earphonesBitmapMobile.png"/>
      </BlackContainer>
      <GrayContainer>
        <TextContainer>
        <p><strong>YX1 EARPHONES</strong></p>
        <Button background="" hover="black" border={true} />
        </TextContainer>
      </GrayContainer>
    </Container>
  )
}
