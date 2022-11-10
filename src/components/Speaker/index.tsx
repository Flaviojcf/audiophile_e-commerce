import { GrayComponent } from './components/GrayComponent/GrayComponent'
import { GridComponent } from './components/GridComponent/GridComponent'
import { OrangeContainerComponent } from './components/OrangeComponent/OrangeContainerComponent'
import { Container } from './styles'

export function Speaker () {
  return (
    <Container>
      <OrangeContainerComponent />
      <GrayComponent />
      <GridComponent/>
    </Container>
  )
}
