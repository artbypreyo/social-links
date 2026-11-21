import React from 'react'
import ReactDOM from 'react-dom/client'
import { QRCodeSVG } from 'qrcode.react'
import './style.css'

const links = [
  {
    label: 'Instagram',
    detail: 'New work, details & behind the scenes',
    handle: '@artbypreyo',
    href: 'https://www.instagram.com/artbypreyo/',
  },
  {
    label: 'Facebook',
    detail: 'Art, updates & conversations',
    handle: 'Art By Preyo',
    href: 'https://www.facebook.com/artbypreyo',
    icon: 'f',
  },
  {
    label: 'YouTube',
    detail: 'Videos & creative moments',
    handle: '@artbypreyo',
    href: 'https://www.youtube.com/@artbypreyo',
    icon: '▶',
  },
  {
    label: 'WhatsApp',
    detail: 'Get in touch directly',
    handle: 'Art By Preyo',
    href: 'https://wa.me/918918665336',
  },
]

function SocialIcon({ label }) {
  if (label === 'Instagram') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  }
  if (label === 'WhatsApp') {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
  }
  return <span aria-hidden="true">{label === 'Facebook' ? 'f' : '▶'}</span>
}

const landingUrl = new URL(window.location.pathname, window.location.origin).href
const isQrPage = new URLSearchParams(window.location.search).has('qr')
const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname)

function downloadQr() {
  const svg = document.querySelector('.qr-code svg')
  if (!svg) return
  const source = new XMLSerializer().serializeToString(svg)
  const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' })
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectUrl
  link.download = 'art-by-preyo-qr.svg'
  link.click()
  setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
}

function App() {
  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <main className="card">
        <div className="art-mark"><img src={`${import.meta.env.BASE_URL}art-by-preyo-circle.png`} alt="Art By Preyo circular logo" width="112" height="112" /></div>
        <p className="eyebrow">WELCOME TO MY WORLD OF ART</p>
        <h1>Art <em>by</em> Preyo<span className="period">.</span></h1>
        <p className="intro">A little colour, a little imagination, and a lot of heart. Find my latest creations and say hello.</p>

        {isQrPage ? (
          <section className="qr-section" aria-label="QR code for this page">
            <p className="section-label">SHARE THIS PAGE</p>
            <div className="qr-code"><QRCodeSVG value={landingUrl} size={224} level="M" marginSize={3} fgColor="#253b35" bgColor="#ffffff" title="QR code for Art By Preyo links" /></div>
            <p className="qr-caption">Scan to open the Art By Preyo links page</p>
            <button className="link-card download" onClick={downloadQr}>Download QR code <span aria-hidden="true">↓</span></button>
            {isLocal && <p className="local-note">This QR currently points to your computer. Publish the site, open its live URL, and download the QR there.</p>}
            <a className="back-link" href={landingUrl}>← View links page</a>
          </section>
        ) : (
          <section className="links-section" aria-label="Social media links">
            <p className="section-label">LET’S CONNECT</p>
            <div className="links-list">
              {links.map((item) => (
                <a className="link-card" key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Open Art By Preyo on ${item.label}`}>
                  <span className={`social-icon ${item.label.toLowerCase()}`} aria-hidden="true"><SocialIcon label={item.label} /></span>
                  <span className="link-copy"><strong>{item.label}</strong><small>{item.detail}</small></span>
                  <span className="arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <p className="handle">@artbypreyo</p>
          </section>
        )}
      </main>
      <p className="footer">MADE WITH ♡ by PK</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
