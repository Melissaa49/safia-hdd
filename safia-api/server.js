import Fastify from 'fastify'
import cors from '@fastify/cors'
import nodemailer from 'nodemailer'
import 'dotenv/config'

const fastify = Fastify({ logger: true })

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ORANGE_USER,
    pass: process.env.ORANGE_PASS,
  },
})

await fastify.register(cors, {
  origin: process.env.FRONTEND_URL,
  methods: ['POST'],
})

fastify.post('/contact', async (request, reply) => {
  const { prenom, nom, email, telephone, date, message, formule, type } = request.body

  if (!prenom || !nom || !email || !message) {
    return reply.status(400).send({ error: 'Champs obligatoires manquants.' })
  }

  try {
    // Email à Safia
    await transporter.sendMail({
      from: `"Safia HDD Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nouvelle demande — ${formule ?? type ?? 'Contact'}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Téléphone :</strong> ${telephone || '—'}</p>
        <p><strong>Type :</strong> ${type || '—'}</p>
        <p><strong>Formule :</strong> ${formule || '—'}</p>
        <p><strong>Date souhaitée :</strong> ${date || '—'}</p>
        <p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Confirmation au client
    await transporter.sendMail({
      from: `"Safia HDD" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Votre demande a bien été reçue — Safia HDD',
      html: `
        <p>Bonjour ${prenom},</p>
        <p>Merci pour votre message ! J'ai bien reçu votre demande concernant <strong>${formule || type || 'votre projet'}</strong>.</p>
        <p>Je vous répondrai dans les <strong>48h</strong>.</p>
        <p>À très vite,<br><strong>Safia HDD</strong><br>Photographe de mariage — Lille</p>
      `,
    })

    return reply.send({ success: true })
  } catch (err) {
    fastify.log.error(err)
    return reply.status(500).send({ error: "Erreur lors de l'envoi." })
  }
})

try {
  await fastify.listen({ port: process.env.PORT || 3001, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}