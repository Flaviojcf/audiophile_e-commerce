import { ShoppingCart } from 'phosphor-react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { HeaderSectionPerPage } from './components/HeaderSectionPerPage'
import { MarkHeadPhone } from './components/MarkHeadPhone'
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
  const { category, productSlug } = useParams()
  const location = useLocation()

  const showHeaderPerPage = !!category && !productSlug

  return (
    <>
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
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/products/headphones'}>Headphones</Link>
                  </li>
                  <li>
                    <Link to={'/products/speakers'}>Speakers</Link>
                  </li>
                  <li>
                    <Link to={'/products/earphones'}>Earphones</Link>
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
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/products/headphones'}>Headphones</Link>
            </li>
            <li>
              <Link to={'/products/speakers'}>Speakers</Link>
            </li>
            <li>
              <Link to={'/products/earphones'}>Earphones</Link>
            </li>
          </ContainerLink>

          <ContainerIcon>
            <ShoppingCart size={24} />
          </ContainerIcon>
        </Content>
      </Container>
      {
        location.pathname === '/' ? <MarkHeadPhone /> : (showHeaderPerPage ? <HeaderSectionPerPage params={category} /> : <></>)
      }
    </>
  )
}
