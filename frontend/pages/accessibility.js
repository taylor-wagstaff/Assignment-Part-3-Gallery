import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

// How to make a simple slider component in React
// https://relatablecode.com/how-to-make-a-simple-slider-component-in-react

// How to increase font size for whole React JS Web App From Single Point
// https://stackoverflow.com/questions/73132995/how-to-increase-font-size-for-whole-react-js-web-app-from-single-point

export default function Accessibility() {
  const [fontSize, setFontSize] = useState(16)
  const [isChecked, setIsChecked] = useState(false)

  // Dynamically Update React and JavaScript with CSS Variables
  // https://www.section.io/engineering-education/dynamically-update-react-and-javascript-with-css-variables/
  // getComputedStyle(document.documentElement).getPropertyValue('')

  useEffect(() => {
    const rootFontSize = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--font-size-small')
    setFontSize(rootFontSize)
    console.log(rootFontSize)
  }, [])

  const handleSliderChange = (e) => {
    const newFontSize = parseInt(e.target.value, 10)
    document.documentElement.style.setProperty(
      '--font-size-small',
      newFontSize + 'px'
    )
    setFontSize(newFontSize)
  }

  // Check if a Checkbox is checked in React
  // https://bobbyhadz.com/blog/react-check-if-checkbox-is-checked

  const handleChange = (event) => {
    if (event.target.checked) {
      document.documentElement.style.setProperty('--background-color', 'black')
      document.documentElement.style.setProperty('--font-color', 'white')
      document.documentElement.style.setProperty('--secondary-color', 'white')
    } else {
      document.documentElement.style.setProperty('--background-color', 'white')
      document.documentElement.style.setProperty('--font-color', 'black')
      document.documentElement.style.setProperty('--secondary-color', 'blue')
    }
    setIsChecked((current) => !current)
  }

  return (
    <div className="grid-container">
      <Header />
      <Navigation />
      <div className="about-content">
        <p className="category_title">Accessibility</p>
        <br />
        <label for="size">Font Size: {fontSize}</label>
        <br />
        <input
          id="size"
          name="size"
          type="range"
          min="16"
          max="40"
          onChange={handleSliderChange}
          value={fontSize}
          aria-labelledby="font-size"
        />
        <br />
        <label for="dark-mode">Dark Mode: {isChecked ? 'Dark' : 'Light'}</label>
        <br />
        <input
          type="checkbox"
          id="dark-mode"
          onChange={handleChange}
          value={isChecked}
          aria-labelledby="dark-mode"
        ></input>
      </div>
      <Footer />
    </div>
  )
}
