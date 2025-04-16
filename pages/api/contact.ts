import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { firstName, lastName, email, phone, message, token } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !message || !token) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 1. Validate reCAPTCHA token using fetch
  try {
    const googleResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      }
    );

    const googleData = await googleResponse.json();

    // If reCAPTCHA verification fails
    if (!googleData.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return res.status(500).json({ error: 'Error verifying reCAPTCHA' });
  }

  // 2. Send the email (TitanMail SMTP)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.titan.email
    port: Number(process.env.SMTP_PORT) || 587,
    secure: true, // true for 465, false for other ports
    encryption: 'TLS',
    auth: {
      user: process.env.SMTP_USER, // your email like info@yourdomain.com
      pass: process.env.SMTP_PASS, // TitanMail app password or real one
    },
  });

  const mailOptions = {
    from: `"Website Contact" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO || process.env.SMTP_USER,
    subject: 'New Contact Form Submission',
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Email sending failed' });
  }
}
