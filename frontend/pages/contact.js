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
  const [isSuccess, setSuccess] = useState(false)

  // INCIDENT-03: Fixed issue of being able to allow numbers and symbols in
  // Name and Message inputs. Changed so that letters are only allowed by using the
  // replace function
  const handleNameChange = (e) => {
    // Allow only alphabets in the Name input
    const newName = e.target.value.replace(/[^A-Za-z\s]/g, '')
    setName(newName)
  }

  const handleMessageChange = (e) => {
    // Allow only alphabets in the Message input
    const newMessage = e.target.value.replace(/[^A-Za-z\s]/g, '')
    setMessage(newMessage)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
    setSuccess(true)
  }

  return (
    <div className="grid-container">
      <Header />
      <Navigation />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-title">
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
                  onChange={handleNameChange}
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
                  required
                  placeholder="Please leave your message here.."
                  value={message}
                  onChange={handleMessageChange}
                />

                <button type="submit">Submit</button>
                {isSuccess && <p className="success-message">Success!</p>}
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
