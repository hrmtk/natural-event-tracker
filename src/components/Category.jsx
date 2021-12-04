import "../scss/layout/category.scss"

const Category = ({ event, index, onClick }) => {
  
  return (
    <div className="category">
      <button onClick={() => onClick(index)} className={event.active ? 'active' : ''}>{event.name}</button>
    </div>
  )
}

export default Category
