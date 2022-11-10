import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors['black-200']};

  > h1 {
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    font-family: Manrope;
    font-style: 700;
    font-size: 2.5rem;
    line-height: 44px;
    letter-spacing: 1.43px;
  }

  padding: 6.5rem 0rem;
`
