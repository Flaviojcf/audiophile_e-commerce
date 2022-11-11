import styled from 'styled-components'

export const GalleryContainer = styled.div`
  margin: 0 auto;

  display: flex;
  gap: 1.875rem;

  @media (max-width: 1080px) and (min-width: 768px) {
    gap: 1.125rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`

export const SmallImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1080px) and (min-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 767px) {
    gap: 1.25rem;
  }
`

export const SmallImageContainer = styled.div`
  width: 27.8125rem;
  height: 17.5rem;

  background-color: ${({ theme }) => theme.colors['white-50']};

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    object-fit: cover;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    width: 17.3125rem;
    height: 10.875rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`

export const ImageContainer = styled.div`
  width: 39.6875rem;
  height: 37rem;

  background-color: ${({ theme }) => theme.colors['white-50']};

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    width: 24.6875rem;
    height: 23rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`
