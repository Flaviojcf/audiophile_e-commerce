import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;

  width: 69.375rem;
  height: 36.75rem;

  gap: 7.8125rem;
  margin-bottom: 12.5rem;
  


  @media screen and (max-width: 1240px) {
    margin-bottom: 6rem;
 

    width: 43.0625rem;
    gap: 3.9375rem;

    flex-direction: column-reverse;
  }

  @media screen and (max-width: 768px) { 
    width: 20.4375rem;
    height: 43.625rem;
    margin-bottom: 14.5rem;

    gap: 2.5rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;


 
  
  

  > h1 {
    font-family: Manrope;
    font-style: 700;
    font-size: 2.5rem;
    line-height: 44px;
    letter-spacing: 1.43px;
    text-transform: uppercase;
  
    width: 25rem;

    > strong {
      color: ${(props) => props.theme.colors['orange-300']};
    }
  }

  > span {
    font-family: Manrope;
    font-style: 500;
    font-size: 0.9375rem;
    line-height: 25px;
    opacity: 0.5;
    width: 28rem;
  }

  @media screen and (max-width: 1240px) {
    text-align: center;
    align-items: center;
    > h1 {
      width: 35rem;
    }
    > span {
      width: 35rem;
    }
  }

  @media screen and (max-width: 768px) {

    > h1 {
      width: 20rem;
      font-size: 1.75rem;
    
    }
    > span {
      width: 20rem;
   
    }

  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
 

  > img:nth-child(1) {
    display: flex;
    height: 100%;
    width: 100%;
  }
  

  > img:nth-child(2),
  img:nth-child(3) {
    display: none;
  }

  

  @media screen and (max-width: 1240px) {
    > img:nth-child(1),
    img:nth-child(3) {
      display: none;
    }

    > img:nth-child(2) {
      display: flex;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    
    > img:nth-child(1),
    img:nth-child(2) {
      display: none;
    }

    > img:nth-child(3) {
      display: flex;
      width: 100%;
    }


  }
`
