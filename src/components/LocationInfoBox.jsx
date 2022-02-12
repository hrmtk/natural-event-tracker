import "../scss/layout/locationInfoBox.scss";

const LocationInfoBox = ({ info }) => {
  const {id, title, date} = info

  return (
    <div className="location-info-box">
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>DATE: {date}</li>
      </ul>
    </div>
  )
}

export default LocationInfoBox
