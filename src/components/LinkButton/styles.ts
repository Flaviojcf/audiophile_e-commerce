import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkButtonContainer = styled(Link)`
    display: inline-block;
    padding: 1rem 2rem;

    border: none;

    background-color: ${({ theme }) => theme.colors['orange-300']};
    color: ${({ theme }) => theme.colors.white};

    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors['orange-100']};
      transition: background-color 0.5s;
    }
`
