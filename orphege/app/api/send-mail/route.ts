import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, projectType, location, budget, message } = body

    // Email au client (auto-reply)
    const autoReplyResponse = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: email,
      subject: 'Merci de votre demande - Orphège',
      html: `
        <h2>Merci ${name} !</h2>
        <p>Nous avons bien reçu votre demande de contact.</p>
        <p>Nous vous recontactons très vite pour en discuter.</p>
        <p>Cordialement,<br/>L'équipe Orphège</p>
      `,
    })
    console.log('Auto-reply response:', autoReplyResponse)

    // Email à Adem (notification)
    const notificationResponse = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: 'nashman360m@gmail.com',
      subject: `Nouvelle demande de contact : ${name}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Type de projet :</strong> ${projectType}</p>
        <p><strong>Localisation :</strong> ${location}</p>
        <p><strong>Budget :</strong> ${budget || 'Non spécifié'}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    })
    console.log('Notification response:', notificationResponse)

    return Response.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
