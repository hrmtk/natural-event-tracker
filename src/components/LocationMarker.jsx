import { Icon } from '@iconify/react';
import { categoryData } from '../data';
import "../scss/layout/locationMarker.scss";

const allCategories = categoryData.map(event => ({id: event.id, icon: event.icon, class: event.class}))

const LocationMarker = ({ id, onClick }) => {
  return (
    <div className="location-marker">
      {allCategories
        .filter(event => event.id === id)
        .map(e => (
          <Icon key={e.id} icon={e.icon} onClick={onClick} className={`location-icon ${e.class}`} />
        ))}
    </div>
  )
}

export default LocationMarker
