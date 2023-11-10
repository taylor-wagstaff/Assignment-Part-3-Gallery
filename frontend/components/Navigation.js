import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div>
      <nav className="navigation_container">
        <ul className="navigation_links">
          <li className="links">
            <Link href="/">Exhibitions</Link>
          </li>
          <li className="links">
            <Link href="/about">About</Link>
          </li>
          <li className="links">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
