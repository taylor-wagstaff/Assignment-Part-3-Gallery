// pages/about.js
import Link from 'next/link'

export default function About() {
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
        <p>About Us</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}
