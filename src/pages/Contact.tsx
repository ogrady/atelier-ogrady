import React from 'react'

export default function Contact() {
  return (
    <section className="mx-auto max-w-lg">
      <h1>Kontakt</h1>
      <p>Am besten per E‑Mail: <strong>deinname@example.com</strong></p>

      <form className="mt-4 grid gap-3">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="E‑Mail" />
        <textarea className="border p-2 rounded" placeholder="Nachricht" rows={5} />
        <button className="bg-black text-white px-4 py-2 rounded">Absenden</button>
      </form>
    </section>
  )
}