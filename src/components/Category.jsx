import { Icon } from '@iconify/react';
import "../scss/layout/category.scss";

const Category = ({ event, index, onClick }) => {
  
  return (
    <div className="category">
      <button onClick={() => onClick(index)} className={event.active ? 'active' : ''}>
        <Icon icon={event.icon} className={`location-icon ${event.class}`} />
        {event.name}
      </button>
    </div>
  )
}

export default Category
