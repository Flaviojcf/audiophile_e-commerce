import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const Container = styled.header`
  display: flex;
  padding: 2rem 10.3125rem 0rem 10.3125rem;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors['black-200']};

  @media screen and (max-width: 1024px) {
    padding: 2rem 2.5rem 2rem 2.5rem;
  }

  @media screen and (max-width: 375px) {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;

  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 2.25rem;
  width: 100%;

  @media screen and (max-width: 1440px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }

  mix-blend-mode: normal;
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  gap: 2.625rem;

  @media screen and (min-width: 1440px) {
    margin-right: 6.3125rem;
  }

  & > a > img:last-child {
    cursor: pointer;
  }

  @media screen and (max-width: 375px) {
    gap: 4.75rem;
  }
  @media screen and (max-width: 320px) {
    gap: 2.85rem;
  }
`

export const ContainerLink = styled.ul`
  display: flex;
  gap: 2.125rem;
  list-style: none;

  @media screen and (min-width: 1440px) {
    margin-right: 19.84375rem;
  }

  > li > a {
    cursor: pointer;

    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;

    transition: color 0.5s;
    &:hover {
      color: ${(props) => props.theme.colors['orange-300']};
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const ContainerIcon = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.white};

  cursor: pointer;
`

// Dropdown Menu

export const DropdownMenuRoot = styled(DropdownMenu.Root)`
  display: flex;

  border: none;
`

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  background: black;
  display: none;
  width: 100%;
  height: 1.2rem;
  align-items: flex-start;
  border: none;

  @media screen and (max-width: 1024px) {
      display: flex;
  }
`

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  > ul {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    padding: 2rem;

    border-radius: 6px;
    margin: 1rem 0rem 0rem 2.4rem;

    box-shadow: 15px 10px 22px 3px rgba(0, 0, 0, 0.58);
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors['black-100']};

    list-style: none;

    > li > a {
      cursor: pointer;
      font-weight: 700;
      font-size: 0.8125rem;
      line-height: 25px;
      letter-spacing: 2px;
      text-transform: uppercase;

      transition: color 0.5s;
      &:hover {
        color: ${(props) => props.theme.colors['orange-300']};
      }
    }
  }

  & {
    @media screen and (max-width: 375px) {
      margin: 1rem 0rem 0rem -0.85rem;
    }
  }
`
