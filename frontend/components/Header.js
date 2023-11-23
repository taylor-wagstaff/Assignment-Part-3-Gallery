import React from 'react'

// SVG Text - <text>
// https://www.w3schools.com/graphics/svg_text.asp

const Header = () => {
  return (
    <div className="header_title">
      <header>
        <svg height="60" width="200" className="header-svg">
          <text
            x="40"
            y="30"
            fontSize="40"
            fill="white"
            transform="rotate(5 10,20)"
            stroke="blue"
            strokeWidth="1.5"
          >
            Treadler
          </text>
        </svg>
      </header>
    </div>
  )
}

export default Header
