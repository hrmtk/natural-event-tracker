import "../scss/layout/category.scss";
import Category from "./Category";

const Categories = ({ showEvent, onClick }) => {
  
  return (
    <div className="categories">
      {showEvent.map((event, index) => (
        <Category key={event.name} event={event} index={index} onClick={onClick} />
      ))} 
    </div>
  )
}

export default Categories
