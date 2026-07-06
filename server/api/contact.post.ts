export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { prenom, nom, email, telephone, date, message, formule, type } = body || {}

  if (!prenom || !nom || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Champs obligatoires manquants.' })
  }

  const RESEND_API_KEY = config.resendApiKey
  const TO_EMAIL = config.contactToEmail || 'safiamomentsdevie@gmail.com'
  const FROM_EMAIL = config.contactFromEmail || 'Safia HDD <onboarding@resend.dev>'

  if (!RESEND_API_KEY) {
    throw createError({ statusCode: 500, statusMessage: "Configuration email manquante côté serveur." })
  }

  async function sendEmail(payload: Record<string, unknown>) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      const errText = await res.text()
      throw new Error(`Resend error (${res.status}): ${errText}`)
    }
  }

  // 1. Email à Safia — nouvelle demande (CRITIQUE : si ça échoue, on renvoie une erreur au client)
  try {
    await sendEmail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: `Nouvelle demande — ${formule ?? type ?? 'Contact'}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone || '—'}</p>
        <p><strong>Type :</strong> ${type || '—'}</p>
        <p><strong>Formule :</strong> ${formule || '—'}</p>
        <p><strong>Date souhaitée :</strong> ${date || '—'}</p>
        <p><strong>Message :</strong><br>${String(message).replace(/\n/g, '<br>')}</p>
      `,
    })
  } catch (err) {
    console.error('Échec envoi email notification Safia :', err)
    throw createError({ statusCode: 500, statusMessage: "Erreur lors de l'envoi de l'email." })
  }

  // 2. Email de confirmation au client — PAS CRITIQUE : la demande est déjà reçue par Safia.
  // Si cet email échoue (ex: domaine Resend non vérifié), on log l'erreur mais on ne fait
  // pas planter la requête, sinon le client verrait un message d'erreur alors que sa demande
  // a bien été transmise.
  try {
    await sendEmail({
      from: FROM_EMAIL,
      to: email,
      subject: 'Votre demande a bien été reçue — Safia HDD',
      html: `
        <p>Bonjour ${prenom},</p>
        <p>Merci pour votre message ! J'ai bien reçu votre demande concernant <strong>${formule || type || 'votre projet'}</strong>.</p>
        <p>Je vous répondrai dans les <strong>48h</strong>.</p>
        <p>À très vite,<br><strong>Safia HDD</strong><br>Photographe de mariage — Mouscron</p>
      `,
    })
  } catch (err) {
    console.error('Échec envoi email confirmation client (vérifie ton domaine Resend) :', err)
  }

  return { success: true }
})