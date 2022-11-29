import React from 'react'
import { MjmlText } from 'mjml-react'

function Heading({children}:{children?:React.ReactNode}) {
  return <MjmlText align='center' fontSize={32}>{children}</MjmlText>
}

function Paragraph({children}:{children?:React.ReactNode}) {
  return <MjmlText>{children}</MjmlText>
}

function Strong({children}:{children?:React.ReactNode}) {
  return <strong style={{ fontWeight: 700 }} >{children}</strong>
}

function Anchor({children}:{children?:React.ReactNode}) {
  return <MjmlText>{children}</MjmlText>
}

function Image({children}:{children?:React.ReactNode}) {
  return <MjmlText>{children}</MjmlText>
}

export default {
  h1: Heading,
  p: Paragraph,
  strong: Strong,
  a: Anchor,
  img: Image
}