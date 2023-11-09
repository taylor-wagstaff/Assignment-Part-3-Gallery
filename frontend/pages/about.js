// pages/about.js

import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function About() {
  return (
    <div className="grid-container">
      <Header />
      <Navigation />
      <div className="about-content">
        <p>About Us</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Footer />
    </div>
  )
}
