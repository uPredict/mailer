import * as React from 'react'
import {  Mjml, MjmlHead, MjmlBody, MjmlSection, MjmlColumn, MjmlImage, MjmlText, MjmlSpacer, MjmlFont, MjmlAttributes, MjmlAll } from 'mjml-react'

export default function Template({ children }: { children: React.ReactNode }) {
  return <Mjml>
    <Head />
    <Body>{children}</Body>
  </Mjml>
}

function Head() {
  return <MjmlHead>
    <MjmlFont href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' />
    <MjmlAttributes>
      <MjmlAll fontFamily='Open Sans,sans-serif' fontSize={16} />
    </MjmlAttributes>
  </MjmlHead>
}

function Body({ children }: { children: React.ReactNode }) {
  return <MjmlBody backgroundColor="#383838" width={600}>
    <Gap />
    <Header />
    <Content>{children}</Content>
    <Gap />
    <Footer />
  </MjmlBody>
}

function Header() {
  return <MjmlSection backgroundColor="white" padding={32}>
    <MjmlColumn>
      <MjmlImage src='https://upredict.github.io/mailer/logo.png' align='center' width={400} />
    </MjmlColumn>
  </MjmlSection>
}

function Content({ children }: { children: React.ReactNode }) {
  return <MjmlSection backgroundColor="white" padding="32px 32px 32px 32px">
    <MjmlColumn>{children}</MjmlColumn>
  </MjmlSection>
}

function Gap() {
  return <MjmlSection>
    <MjmlColumn>
      <MjmlSpacer height={32} />
    </MjmlColumn>
  </MjmlSection>
}

function Footer() {
  return <MjmlSection backgroundColor="#333333" fullWidth>
    <MjmlColumn>
      <MjmlText color="#dddddd" paddingTop={32} paddingBottom={64} align="center">&copy; uPredict Ltd. 2023</MjmlText>
    </MjmlColumn>
  </MjmlSection>
}