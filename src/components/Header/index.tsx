import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import {
  Container,
  ContainerIcon,
  ContainerImage,
  ContainerLink,
  Content,
  DropdownMenuContent,
  DropdownMenuRoot,
  DropdownMenuTrigger
} from './styles'

export function Header () {
  return (
    <Container>
      <Content>
        <ContainerImage>
          <DropdownMenuRoot>
            <DropdownMenuTrigger>
              <img src="/assets/Group.png" alt="" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Headphones</a>
                </li>
                <li>
                  <a>Speakers</a>
                </li>
                <li>
                  <a>Earphones</a>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenuRoot>
          <Link to="/">
            <img src="/assets/audiophile.png" alt="Logo esrito audiophile" />
          </Link>
        </ContainerImage>
        <ContainerLink>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Headphones</a>
          </li>
          <li>
            <a>Speakers</a>
          </li>
          <li>
            <a>Earphones</a>
          </li>
        </ContainerLink>
        <ContainerIcon>
          <ShoppingCart size={24} />
        </ContainerIcon>
      </Content>
    </Container>
  )
}
