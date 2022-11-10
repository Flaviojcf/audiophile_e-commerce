import { Button } from '../../../Button'
import { ImageContainer, OrangeContainer, TextContainer } from './styles'

export function OrangeContainerComponent () {
  return (
    <OrangeContainer>
      <img src="/assets/home/desktop/circlesDesktop.png" />
      <img src="/assets/home/tablet/circlesTablet.png" />
      <img src="/assets/home/mobile/circlesMobile.png" />
      <ImageContainer>
        <img src="/assets/home/desktop/image-speaker-zx9.png" alt="" />
      </ImageContainer>
      <TextContainer>
        <h1>
          ZX9 <strong>SPEAKER</strong>
        </h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button background="black" hover="gray-300" border={false} />
      </TextContainer>
    </OrangeContainer>
  )
}
