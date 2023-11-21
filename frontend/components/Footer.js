import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import GeoLocation from './GeoLocation'

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
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
              <form>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>

              <button type="submit">Subscribe</button>
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
