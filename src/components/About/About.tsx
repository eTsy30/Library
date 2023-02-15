import React from 'react'

import { TextAbout, TitleAbout } from './About-style'

import { ICard } from 'types/card'

export const About = ({ description }: ICard) => (
  <React.Fragment>
    <TitleAbout>О книге</TitleAbout>
    <TextAbout>{description}</TextAbout>
    <TextAbout>{description}</TextAbout>
  </React.Fragment>
)
