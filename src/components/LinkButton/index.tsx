import { LinkButtonContainer } from './styles'

type LinkButtonProps = {
  to: string
  content: string
}

export function LinkButton ({ content, to }: LinkButtonProps) {
  return (
    <LinkButtonContainer to={to}>
      {content}
    </LinkButtonContainer>
  )
}
