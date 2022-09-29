import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import * as L from 'leaflet/dist/leaflet'

const Map = () => {
  let [map , setMap] = useState(null)
  let [mapinit , setMapInit] = useState(false)

  const initMap = ()=>{
        if(mapinit) return

       console.log('ooooooooooooo map')

        var _map = L.map('mapid').setView([51.505, -0.09], 13);

        setMap(_map)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(_map);

        L.marker([51.5, -0.09]).addTo(_map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
            
        mapinit = true
  }

  useEffect(()=>{
     initMap()

  }, [])
  return (
    <div>
       <div id="mapid" style={{ width: "100%" , height: "100vh" }}>

       </div>
    </div>
  )
}

export default Map
