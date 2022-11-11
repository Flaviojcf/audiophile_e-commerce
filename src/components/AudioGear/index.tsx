import { Container, ImageContainer, TextContainer } from './styles'

export function AudioGear () {
  return (
    <Container>
      <TextContainer>
        <h1>
          Bringing you the <strong>best </strong>audio gear
        </h1>
        <span>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </span>
      </TextContainer>
      <ImageContainer>
        <img src="/assets/shared/desktop/image-best-gear.jpg" />
        <img src="/assets/shared/tablet/image-best-gear.jpg" />
        <img src="/assets/shared/mobile/image-best-gear.jpg" />
      </ImageContainer>
    </Container>
  )
}
