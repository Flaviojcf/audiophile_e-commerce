import { GalleryContainer, ImageContainer, SmallImageContainer, SmallImagesContainer } from './styles'

export function Gallery () {
  return (
    <GalleryContainer>
      <SmallImagesContainer>
        <SmallImageContainer>
          <img src={'/assets/product-yx1-earphones/desktop/image-gallery-1.jpg'} alt="" />
        </SmallImageContainer>
        <SmallImageContainer>
          <img src={'/assets/product-yx1-earphones/desktop/image-gallery-2.jpg'} alt="" />
        </SmallImageContainer>
      </SmallImagesContainer>

      <ImageContainer>
        <img src={'/assets/product-yx1-earphones/desktop/image-gallery-3.jpg'} alt="" />
      </ImageContainer>
    </GalleryContainer>
  )
}
