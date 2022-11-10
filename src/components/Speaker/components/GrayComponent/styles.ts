import styled from 'styled-components'

export const Container = styled.div`
  width: 69.375rem;
  height: 20rem;
 
 

  > img {
    width: 100%;
    height: 100%;
  }

  > img:nth-child(2),img:nth-child(3) {
    display: none;
  }

  @media screen and (max-width: 1240px) {
    height: 20rem;
    width: 43.06rem;

    > img:nth-child(2) {
      display: flex;
      width: 100%;
      height: 100%;
    }
    > img:nth-child(1),img:nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: 23.25rem;
    width: 20rem;

    > img:nth-child(3) {
      display: flex;
      width: 100%;
      height: 100%;
    }
    > img:nth-child(1),img:nth-child(2) {
      display: none;
    }
  }
  
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: -13.5rem;
  width: 20rem;
  height: 20rem;
  padding-left: 5.9375rem;

  gap: 2rem;
  color: black;

  > p {
    font-family: Manrope;
    font-style: 700;
    font-size: 1.75rem;
    letter-spacing: 2px;
    line-height: 38px;
    line-height: 100%;
  }

  @media screen and (max-width: 1240px) {
    padding-left: 3.875rem;
  }

  @media screen and (max-width: 768px) {
    padding-left: 1.5rem;
  }

`
