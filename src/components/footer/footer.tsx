import { FooterText, SocialIcon, Wrapper } from './Footer-style'

import { ReactComponent as Facebook } from 'assets/icon/IconFacebook.svg'
import { ReactComponent as Insta } from 'assets/icon/IconInsta.svg'
import { ReactComponent as LinkedIn } from 'assets/icon/IconLinkedIn.svg'
import { ReactComponent as VK } from 'assets/icon/IconVK.svg'

const YEAR = new Date().getFullYear()

export const Footer = () => (
  <Wrapper>
    <FooterText>
      <span>© 2020-{YEAR} Cleverland.</span>
      <span>Все права защищены.</span>
    </FooterText>
    <SocialIcon>
      <Facebook />
      <Insta />
      <VK />
      <LinkedIn />
    </SocialIcon>
  </Wrapper>
)
