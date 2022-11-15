import { Button } from '../../../Button'
import { Container, ImageContainer, TextContainer } from './styles'

export function MarkHeadPhone () {
  return (
    <Container>
      <TextContainer>
        <p>NEW PRODUCT</p>
        <h1>XX99 MARK II HEADPHONES </h1>
        <span>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </span>
        <Button background="orange-300" hover="orange-100" border={false} />
      </TextContainer>
      <ImageContainer />
    </Container>
  )
}
