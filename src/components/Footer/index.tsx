import { CopyrightText, FooterContainer, FooterContainerHeader, Rectangle, SocialsContainer } from './styles'

import audioPhileImg from '../../assets/audiophile.svg'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Footer () {
  return (
    <FooterContainer>
      <Rectangle />

      <FooterContainerHeader>
        <img src={audioPhileImg} alt="Audiophile logo" />
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products/headphones">HEADPHONES</Link>
          </li>
          <li>
            <Link to="/products/speakers">SPEAKERS</Link>
          </li>
          <li>
            <Link to="/products/earphones">EARPHONES</Link>
          </li>
        </ul>
      </FooterContainerHeader>

      <p>
        Audiophile is an all in one stop to fulfill your audio needs.
        We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
        Come and visit our demo facility - we’re open 7 days a week.
      </p>

      <CopyrightText>
        Copyright 2022. All Rights Reserved
      </CopyrightText>

      <SocialsContainer>
        <li>
          <a href="#">
            <FacebookLogo size={24} weight='fill' />
          </a>
        </li>
        <li>
          <a href="#">
            <TwitterLogo size={24} weight='fill' />
          </a>
        </li>
        <li>
          <a href="#">
            <InstagramLogo size={24} />
          </a>
        </li>
      </SocialsContainer>

    </FooterContainer>
  )
}
