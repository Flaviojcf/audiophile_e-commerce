import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  padding: 2rem 10.3125rem 2.25rem 10.3125rem;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};

  @media screen and (max-width: 1024px) {
    padding: 2rem 2.5rem 2rem 2.5rem;
  }

  @media screen and (max-width: 375px) {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.25rem;
  width: 100%;

  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  mix-blend-mode: normal;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  gap: 2.625rem;

  & > img:first-child {
    display: none;
    cursor: pointer;
  }

  & > img:last-child {
    cursor: pointer;
  }

  & > img:first-child {
    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }

  @media screen and (max-width: 375px) {
    gap: 4.75rem;
  }
`;

export const ContainerLink = styled.div`
  display: flex;
  gap: 2.125rem;

  > a {
    cursor: pointer;

    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 25px;
    letter-spacing: 2px;

    transition: color 0.5s;
  }

  > a:hover {
    color: ${(props) => props.theme.colors["orange-300"]};
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ContainerIcon = styled.div`
  cursor: pointer;
`;
