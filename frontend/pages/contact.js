// pages/about.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

import { useState } from 'react'

// I got some of the input fields and elements from here:
// How to Create and Validate Modern Web Forms with HTML5
// https://www.freecodecamp.org/news/create-and-validate-modern-web-forms-html5/

export default function Contact() {
  // Used useState if it was to be sent to the Server
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="grid-container">
      <Header />
      <Navigation />
      <div className="form">
        <form>
          <div className="form-group">
            <div className="elements-title">
              <p className="category_title">Contact</p>
            </div>
            <div className="form-elements-container">
              <div className="form-elements">
                <p>Please contact us if you have any inquiries </p>
                <input
                  autoFocus
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  autoComplete="on"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  cols="50"
                  placeholder="Please leave your message here.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
