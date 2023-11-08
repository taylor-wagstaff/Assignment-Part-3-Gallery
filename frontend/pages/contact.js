// pages/about.js
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="grid-container">
      <div>
        <header className="header_title">
          <h1>My Gallery Title</h1>
        </header>
        <nav className="header_nav">
          <ul className="header_links">
            <li>
              <Link href="/">Exhibitions</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p>galleryemail@gmail.com</p>
      </div>
    </div>
  )
}
