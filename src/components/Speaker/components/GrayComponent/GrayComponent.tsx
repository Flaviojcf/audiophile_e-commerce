
import { Button } from '../../../Button'
import { Container, TextContainer } from './styles'

export function GrayComponent () {
  return (

    <Container>
      <img src="/assets/home/desktop/bitmapDesktop.png" />
      <img src="/assets/home/tablet/bitmapTablet.png"/>
      <img src="/assets/home/mobile/bitmapMobile.png"/>
      <TextContainer>
        <p><strong>ZX7 SPEAKER</strong></p>
        <Button background="" hover="black" border={true} />
      </TextContainer>
    </Container>

  )
}
