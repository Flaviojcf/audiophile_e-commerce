import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  padding: 0rem 10.3125rem;
  align-items: center;

  background: ${(props) => props.theme.colors['black-200']};

  border: 1px solid  ${(props) => props.theme.colors['black-200']};
  height: 37.125rem;
  width: 100%;

  overflow: hidden;

  @media screen and (max-width: 1220px) {
    justify-content: center;
  
  }

  @media screen and (max-width: 320px) { 
    padding: 0rem 4rem;
    margin-top: -2rem ;
  }



`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;

  width: 25.6875rem;
  gap: 1.5rem;

  color: ${(props) => props.theme.colors.white};

  > p {
    opacity: 0.4;
    letter-spacing: 10px;
    font-family: Manrope;
    font-style: 400;
    font-size: 0.875rem;
    line-height: 19px;
  }

  > h1 {
    font-family: Manrope;
    font-style: 700;
    font-size: 3.5rem;
    line-height: 58px;
    letter-spacing: 2px;
  }

  > span {
    font-family: Manrope;
    font-style: 500;
    font-size: 0.9375rem;
    line-height: 25px;
    opacity: 0.45;

    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 1220px) {
    position: relative;
    text-align: center;
    align-items: center;
    margin-top: -0.5rem;
  

    > span {
      width: 21.8125rem;
      margin-bottom: 1.5rem;
    }

    &::after {
     
      display: flex;
      content: "";
      position: absolute;
      background: url("/assets/home/tablet/image-header.jpg") center/contain  no-repeat;
      border-radius: 50%;
  
      width: 200%;
      height: 200%;
      margin-top: -14rem;
      z-index: -1;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: -8rem;
   
    
    > h1 {
    font-family: Manrope;
    font-style: 700;
    font-size: 2.25rem;
    line-height: 40px;
    letter-spacing: 1.29px;
  }

    &::after {
      background: url("/assets/home/mobile/image-header.jpg") center/contain  no-repeat;
      width: 90%;
      height:200%;
      margin-top: -13rem;
     
    }
  }

  @media screen and (max-width: 720px) {
    > span {
      width: 21.3rem;
    }

  &::after {
    margin-top: -13rem;
    width: 100%;
  }
}

`

export const ImageContainer = styled.div`
  &::after {
    display: flex;
    position: absolute;
    margin-left: -12rem;
    content: "''";
    background: url("/assets/home/desktop/image-hero.jpg") center/contain
      no-repeat;

    border-radius: 50%;
    width: 100%;
    height: 130%;
    top: -10rem;
    opacity: 0.8;


    @media screen and (max-width: 1220px) {
    
      background: none;
    }
  }
`
