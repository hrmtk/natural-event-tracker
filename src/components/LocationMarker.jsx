import "../scss/layout/locationMarker.scss"
import { Icon } from '@iconify/react'
import drought from '@iconify/icons-mdi/water-off'
import dustHaze from '@iconify/icons-mdi/blur'
import earthquakes from '@iconify/icons-mdi/home-alert-outline'
import floods from '@iconify/icons-mdi/waves'
import landslides from '@iconify/icons-mdi/network-strength-1-alert'
import manmade from '@iconify/icons-mdi/human-queue'
import seaLakeIce from '@iconify/icons-mdi/snowflake'
import severeStorms from '@iconify/icons-mdi/weather-hurricane'
import snow from '@iconify/icons-mdi/snowman'
import tempExtremes from '@iconify/icons-mdi/alert-octagram-outline'
import volcanoes from '@iconify/icons-mdi/image-filter-hdr'
import waterColor from '@iconify/icons-mdi/water'
import wildfires from '@iconify/icons-mdi/fire'

const LocationMarker = ({ lat, lng, id, onClick }) => {
  return (
    <div className="location-marker">
      {id === "drought" && <Icon icon={drought} onClick={onClick} className="location-icon dust"/>}
      {id === "dustHaze" && <Icon icon={dustHaze}  onClick={onClick} className="location-icon dust"/>}
      {id === "earthquakes" && <Icon icon={earthquakes}  onClick={onClick} className="location-icon"/>}
      {id === "floods" && <Icon icon={floods}  onClick={onClick} className="location-icon floods"/>}
      {id === "landslides" && <Icon icon={landslides}  onClick={onClick} className="location-icon landslides"/>}
      {id === "manmade" && <Icon icon={manmade}  onClick={onClick} className="location-icon manmade"/>}
      {id === "seaLakeIce" && <Icon icon={seaLakeIce}  onClick={onClick} className="location-icon ice"/>}
      {id === "severeStorms" && <Icon icon={severeStorms}  onClick={onClick} className="location-icon storm"/>}
      {id === "snow" && <Icon icon={snow}  onClick={onClick} className="location-icon snow"/>}
      {id === "tempExtremes" && <Icon icon={tempExtremes}  onClick={onClick} className="location-icon"/>}
      {id === "volcanoes" && <Icon icon={volcanoes}  onClick={onClick} className="location-icon volcanoes"/>}
      {id === "waterColor" && <Icon icon={waterColor}  onClick={onClick} className="location-icon water-color"/>}
      {id === "wildfires" && <Icon icon={wildfires}  onClick={onClick} className="location-icon wildfires"/>}
    </div>
  )
}

export default LocationMarker
