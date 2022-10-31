import { CopyrightText, FooterContainer, FooterContainerHeader, Rectangle, SocialsContainer } from "./styles";

import audioPhileImg from '../../../public/assets/audiophile.svg'
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

export function Footer () {
    return (
        <FooterContainer>
            <Rectangle />

            <FooterContainerHeader>
                <img src={audioPhileImg} alt="Audiophile logo" />
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">HEADPHONES</a>
                    </li>
                    <li>
                        <a href="#">SPEAKERS</a>
                    </li>
                    <li>
                        <a href="#">EARPHONES</a>
                    </li>
                </ul>
            </FooterContainerHeader>

            <p>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
                Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <CopyrightText>
                Copyright 2022. All Rights Reserved
            </CopyrightText>

            <SocialsContainer>
                <li>
                    <a href="#">
                        <FacebookLogo size={24} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <TwitterLogo size={24} />
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