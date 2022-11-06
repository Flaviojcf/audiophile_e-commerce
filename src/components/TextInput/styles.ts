import styled from 'styled-components'

type InputProps = {
  hasError: boolean
  isLargeSize: boolean
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  max-width: ${({ isLargeSize }) => isLargeSize ? '100%' : '19rem'};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > label {
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 16px;
      letter-spacing: -0.214286px;

      color: ${({ theme, hasError }) => hasError ? theme.colors.red : theme.colors.black};
    }

    > span {
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 16px;
      letter-spacing: -0.214286px;

      color: ${({ theme }) => theme.colors.red};

      display: ${({ hasError }) => hasError ? 'initial' : 'none'};
    }
  }

  input[type="text"] {
      padding: 1.25rem 1.25rem;

      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      opacity: 0.7;
      outline: none;

      border: ${({ hasError }) => hasError ? '2px' : '1px'} solid ${({ hasError, theme }) => hasError ? theme.colors.red : theme.colors['gray-50']};
      border-radius: 8px;

      font-weight: 700;
      font-size: 0.875rem;
      line-height: 19px;
      letter-spacing: -0.25px;

      &:focus {
        border-color: ${({ theme }) => theme.colors['orange-300']};
        opacity: 1;
      }
  }
`
