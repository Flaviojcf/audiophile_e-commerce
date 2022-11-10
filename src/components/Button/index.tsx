import { ButtonContainer } from './styles'

interface ButtonProps {
  width?: string;
  background : string;
  hover: string;
  border:boolean;
}

export function Button ({ background, hover, border }: ButtonProps) {
  return <ButtonContainer background={background} hover={hover} border={border}>SEE PRODUCT</ButtonContainer>
}
