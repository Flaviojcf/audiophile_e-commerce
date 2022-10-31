import { ShoppingCart } from "phosphor-react";
import {
  Container,
  ContainerIcon,
  ContainerImage,
  ContainerLink,
  Content,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <ContainerImage>
          <img src="/assets/group.png" alt="" />
          <img src="/assets/audiophile.png" alt="Logo esrito audiophile" />
        </ContainerImage>
        <ContainerLink>
          <a>Home</a>
          <a>Headphones</a>
          <a>Speakers</a>
          <a>Earphones</a>
        </ContainerLink>
        <ContainerIcon>
          <ShoppingCart size={24} />
        </ContainerIcon>
      </Content>
    </Container>
  );
}
