import { createTransport } from 'nodemailer'
import * as SMTPTransport from 'nodemailer/lib/smtp-transport'
import addresses from './addresses'
import settings from "./settings";


const config : SMTPTransport.Options = {
  port: 587,
  host: 'smtp.office365.com',
  requireTLS: true,
  auth: settings.email
}

const transporter = createTransport(config)

export function sendMail(content : string) {
  const message = {
    from: settings.email.user,
    bcc: addresses,
    subject: "uPredict World Cup Update",
    html: content
  }

  transporter.sendMail(message,(err,info) => {
    console.log("Error")
    console.log(JSON.stringify(err))

    console.log("Info")
    console.log(JSON.stringify(info))
  })
}