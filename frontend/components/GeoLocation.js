import React, { useState, useEffect } from 'react'

// How to use geolocation api using ReactJS
// https://dev.to/choiruladamm/how-to-use-geolocation-api-using-reactjs-ndk

const GeoLocation = () => {
  const [userLocation, setUserLocation] = useState(null)
  useEffect(() => {
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords
          // update the value of userlocation variable
          setUserLocation({ latitude, longitude })
        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error)
        }
      )
    }
    // if geolocation is not supported by the users browser
    else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  return (
    <div>
      {userLocation && (
        <div>
          <p style={{ color: 'blue' }}>
            {userLocation.latitude} {userLocation.longitude}
          </p>
        </div>
      )}
    </div>
  )
}

export default GeoLocation
