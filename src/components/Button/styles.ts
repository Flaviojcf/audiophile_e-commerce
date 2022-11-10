import styled from 'styled-components'

interface ButtonContainerProps {
  background: string;
  hover: string;
  border: boolean;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10rem;
  height: 3rem;

  cursor: pointer;
  border: ${(props) => (props.border === true ? '1px solid black' : 'none')};

  background: ${(props) =>
    (props.background === 'black' && 'black') ||
    (props.background === 'orange-300' && props.theme.colors['orange-300'])};

  font-family: Manrope;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.8px;

  transition: all 0.2s;

  &:hover {
    background: ${(props) =>
      (props.hover === 'black' && 'black') ||
      (props.hover === 'gray-300' && props.theme.colors['gray-300']) ||
      (props.hover === 'orange-100' && props.theme.colors['orange-100'])};
    color: ${(props) => props.theme.colors.white};
  }
`
