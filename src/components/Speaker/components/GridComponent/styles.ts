import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1.875rem;
  width: 69.375rem;
  margin-bottom: 10rem;
    


  @media screen and (max-width: 1240px) {
    width: 43.0625rem;
    gap: 0.6875rem;
  
  }

  @media screen and (max-width: 768px) {

    margin-bottom: 7.5rem;

    width: 20.4375rem;
    gap: 1.5rem;
    flex-direction: column;
  }
`

export const BlackContainer = styled.div`
  display: flex;
  width: 33.75rem;
  
  background: ${(props) => props.theme.colors.black};

  > img:nth-child(2),
  img:nth-child(3) {
    display: none;
  }

  @media screen and (max-width: 1240px) {
    width: 21.1875rem;

    > img:nth-child(1),
    img:nth-child(3) {
      display: none;
    }
    > img:nth-child(2) {
      display: flex;
    }
  }

  @media screen and (max-width: 768px) {
    width: 20.4375rem;
    height: 12.5rem;
    

    > img:nth-child(1),
    img:nth-child(2) {
      display: none;
    }

    > img:nth-child(3) {
      display: flex;
    }
  }
`
export const GrayContainer = styled.div`
  display: flex;
  width: 33.75rem;
  
  background: ${(props) => props.theme.colors['gray-200']};

  @media screen and (max-width: 1240px) {
    width: 21.1875rem;
  }

  @media screen and (max-width: 768px) {
    height: 12.5rem;
    width: 20.4375rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  padding: 6.3125rem 12.375rem 2.3125rem 5.9375rem;
  gap: 2rem;


  @media screen and (max-width: 1240px) {
    padding: 6.3125rem 12.375rem 6.3125rem 2.5625rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2.5625rem 3.5rem 2.5625rem 1.5rem;
  }


  > p {
    font-family: Manrope;
    font-style: 700;
    font-size: 1.75rem;
    letter-spacing: 2px;
    line-height: 38px;
    line-height: 100%;
    

    @media screen and (max-width: 1240px) {
      width: 18rem;
    }
  }
`
