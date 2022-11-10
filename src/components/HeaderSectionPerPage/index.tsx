import { Container } from './styles'

interface HeaderSectionPerPageProps {
  params: string;
}

export function HeaderSectionPerPage ({ params }: HeaderSectionPerPageProps) {
  return (
    <Container>
      <h1>{params}</h1>
    </Container>
  )
}
