import nodemailer from 'nodemailer';

export const config = { runtime: 'nodejs' };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { act, naam, email, telefoon, plaats, datum, bericht, return_to } = req.body || {};
  const returnPath = typeof return_to === 'string' && return_to.startsWith('/') ? return_to : '/contact';

  if (!act || !naam || !email || !telefoon) {
    res.status(400).send('Verplichte velden ontbreken');
    return;
  }

  const to = act === 'BalloonMagic'
    ? process.env.CONTACT_EMAIL_BALLOONMAGIC
    : process.env.CONTACT_EMAIL_DEFAULT;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      replyTo: email,
      subject: `Nieuwe aanvraag: ${act} — ${naam}`,
      text: [
        `Act: ${act}`,
        `Naam: ${naam}`,
        `E-mail: ${email}`,
        `Telefoon: ${telefoon}`,
        `Plaats: ${plaats || '-'}`,
        `Datum: ${datum || '-'}`,
        `Bericht: ${bericht || '-'}`,
      ].join('\n'),
    });

    res.writeHead(302, { Location: `${returnPath}?verzonden=1` });
    res.end();
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).send('Versturen mislukt, probeer het later opnieuw.');
  }
}
