import * as React from 'react'
import { MjmlText } from 'mjml-react'

function Heading({children}:{children?:React.ReactNode}) {
  return <MjmlText align='center' fontSize={32}>{children}</MjmlText>
}

function Paragraph({children}:{children?:React.ReactNode}) {
  return <MjmlText lineHeight="1.5">{children}</MjmlText>
}

function Strong({children}:{children?:React.ReactNode}) {
  return <strong style={{ fontWeight: 700 }} >{children}</strong>
}

function Anchor({children,href}:{children?:React.ReactNode,href: string}) {
    return <a href={href} target="_blank">{children}</a>
}

function Image({children}:{children?:React.ReactNode}) {
  return <MjmlText>{children}</MjmlText>
}

function Small({children}:{children?:React.ReactNode}) {
    return <em style={{ fontSize: '0.8em', fontStyle: 'normal' }} >{children}</em>
}

function Centre({children}:{children?:React.ReactNode}) {
    return <MjmlText align="center">{children}</MjmlText>
}

export default {
  h1: Heading,
  p: Paragraph,
  strong: Strong,
  a: Anchor,
  img: Image,
  em: Small,
  Centre
}