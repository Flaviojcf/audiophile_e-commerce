import styled from 'styled-components'

export const FooterContainer = styled.footer`
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 0 10.3125rem 3rem;

    background-color: ${({ theme }) => theme.colors['black-100']};
    color: ${({ theme }) => theme.colors.white};

    > p {
        margin-top: 2.25rem;
        max-width: 33.75rem;

        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 25px;

        opacity: 0.5;
    }

    @media (max-width: 1024px) and (min-width: 520px) {
        padding: 0 2.5rem 2.5rem;

        > p {
            max-width: 100%;
        }
    }

    @media (max-width: 520px) {
        padding: 0 1.5rem 2.5rem;

        > p {
            max-width: 100%;
        }
    }
`

export const Rectangle = styled.div`
    height: 4px;
    width: 101px;

    background-color: ${({ theme }) => theme.colors['orange-300']};

    @media (max-width: 520px) {
        margin: 0 auto
    }
`

export const FooterContainerHeader = styled.header`
    margin-top: 4.4375rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
        width: 8.9375rem;
        height: 1.5625rem;
    }

    > ul {
        display: flex;
        align-items: center;
        gap: 2.125rem;

        > li > a {
            font-family: 'Manrope', sans-serif;
            font-weight: 700;
            font-size: 0.8125rem;
            line-height: 25px;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;

            color: ${({ theme }) => theme.colors.white};

            &:hover {
                transition: color 0.2s;
                color: ${({ theme }) => theme.colors['orange-300']};
            }
        }
    }

    @media (max-width: 1024px) and (min-width: 520px) {
        margin-top: 3.5rem;

        flex-direction: column;
        align-items: flex-start;
        justify-content: initial;
        gap: 2rem;
    }

    @media (max-width: 520px) {
        margin-top: 3.25rem;

        flex-direction: column;
        align-items: center;
        justify-content: initial;
        gap: 3rem;

        > ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
    }
`

export const SocialsContainer = styled.ul`   
    display: flex;
    align-items: center;
    gap: 1rem; 

    position: absolute;
    right: 10.3125rem;
    bottom: 8.5rem;

    > li > a {
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            transition: color 0.2s;
            color: ${({ theme }) => theme.colors['orange-300']};
        }
    }

    @media (max-width: 1024px) and (min-width: 520px) {
        bottom: 2.5rem;
        right: 2.5rem;
    }

    @media (max-width: 520px) {
        position: static;
        margin: 3rem auto 0;
    }
    
`

export const CopyrightText = styled.span`
    display: inline-block;
    margin-top: 3.5rem;

    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 25px;

    opacity: 0.5;

    @media (max-width: 520px) {
        margin: 3rem auto 0;
    }
`
