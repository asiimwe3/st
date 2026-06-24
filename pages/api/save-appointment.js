// pages/api/save-appointment.js
// Saves appointment to a JSON file (simple, no DB needed for MVP)
// For production: swap with Supabase/database insert

import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, phone, email, service, date, time, message } = req.body

  if (!name || !phone || !service || !date) {
    return res.status(400).json({ error: 'Name, phone, service and date are required.' })
  }

  // Basic sanitization
  const appointment = {
    id: Date.now().toString(),
    name:    String(name).trim().slice(0, 100),
    phone:   String(phone).trim().slice(0, 30),
    email:   email ? String(email).trim().slice(0, 100) : null,
    service: String(service).trim().slice(0, 100),
    date:    String(date).trim(),
    time:    time ? String(time).trim() : null,
    message: message ? String(message).trim().slice(0, 1000) : null,
    status:  'pending',
    created_at: new Date().toISOString(),
  }

  try {
    // Store in /tmp/appointments.json (persists during server runtime)
    // For Vercel/serverless: use a database instead
    const filePath = path.join('/tmp', 'appointments.json')
    let appointments = []
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8')
      appointments = JSON.parse(raw)
    }
    appointments.push(appointment)
    fs.writeFileSync(filePath, JSON.stringify(appointments, null, 2))

    return res.status(200).json({ success: true, id: appointment.id })
  } catch (err) {
    console.error('save-appointment error:', err)
    // Still return success — the WhatsApp notification already went through
    return res.status(200).json({ success: true, warning: 'Saved via WhatsApp only' })
  }
}
