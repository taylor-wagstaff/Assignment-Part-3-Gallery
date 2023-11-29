import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import GeoLocation from './GeoLocation'

// INCIDENT-01: Fix Success messgage on Newsletter once user enters correct email and
// clicks Success
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSuccess, setSuccess] = useState(false)

  // Added Handle Submit once clicked
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
    // check if email is not empty to submit
    if (email !== '') {
      setSuccess(true)
    }
  }

  return (
    <div className="footer-container">
      <footer>
        <div className="footer-elements">
          <div>
            <p style={{ color: 'blue' }}>General enquiries</p>
            <p>treadlergallery@gmail.com</p>
          </div>
          <div>
            <p style={{ color: 'blue' }}>Location of Gallery</p>
            <p>86a Queen Street</p>
            <p>Auckland City Central</p>

            <div>
              <button onClick={() => setIsOpen(true)}>Map</button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>
          </div>
          <div>
            <div className="form-elements">
              <div>
                <p style={{ color: 'blue' }}>Newsletter</p>
                <p>Sign up to receive the latest updates on the gallery </p>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe</button>
                {isSuccess && <p className="success-message">Success!</p>}
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
      <GeoLocation />
    </div>
  )
}

export default Footer
