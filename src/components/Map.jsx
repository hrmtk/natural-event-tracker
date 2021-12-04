import {useState} from 'react'
import '../scss/layout/map.scss'
import GoogleMapReact from 'google-map-react'
import LocationInfoBox from './LocationInfoBox'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map(event => {
    return event.geometry.map(point => {
      const id = `${point.date}-${point.coordinates}`
      return <LocationMarker key={id} lat={point.coordinates[1]} lng={point.coordinates[0]} id={event.categories[0].id} onClick={() => setLocationInfo({id: event.id, title: event.title, date: point.date})}/>
    })
  })

  return (
    <div className="map">
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
        defaultCenter={ center }
        defaultZoom={ zoom }
        >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}


Map.defaultProps = {
  center: {
    lat: 37.941566,
    lng: -40.204243
  },
  zoom: 2
}

export default Map
