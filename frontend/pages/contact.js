// pages/about.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function Contact() {
  return (
    <div className="grid-container">
      <Header />
      <Navigation />
      <div className='contact-content'>
        <p>galleryemail@gmail.com</p>
      </div>
      <Footer />
    </div>
  )
}
