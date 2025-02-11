import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
// import { Email } from './Email';

const transporter = nodemailer.createTransport({
  // host: 'smtp.forwardemail.net',
  // port: 465,
  // secure: true,
  service: 'gmail', // You can use another service, like Outlook or SendGrid
  auth: {
    user: 'sarimsaleem07@gmail.com',
    pass: 'sarimmoosa',
  },
});

// /const emailHtml = await render(<Email url="https://example.com" />);

// const options = {
  // from: 'you@example.com',
  // to: 'user@gmail.com',
  // subject: 'hello world',
  // html: emailHtml,
// };

export default transporter;
// await transporter.sendMail(options);
