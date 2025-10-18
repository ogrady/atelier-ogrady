import React from 'react'

export default function GDPR() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <h1>Datenschutzerklärung</h1>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Auf dieser Website werden keine Cookies verwendet und es werden keine personenbezogenen Daten automatisch erhoben.
      </p>
      <p>
        Sollten Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
      </p>
      <p>
        Hinweis: Für den Versand von E-Mails gelten die Datenschutzbestimmungen Ihres E-Mail-Anbieters.
      </p>
      <p>
        Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten Daten zu erhalten sowie deren Löschung zu verlangen.
      </p>
      <p>
        Kontakt für Datenschutzanfragen: <a href="mailto:info@example.com" className="underline hover:text-gray-900">info@example.com</a>
      </p>
    </div>
  )
}
