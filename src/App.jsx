import { useState, useEffect } from 'react';
import { categoryData } from './data';
import axios from 'axios';
import './scss/App.scss';
import Categories from './components/Categories';
import Days from './components/Days';
import Map from './components/Map';
import Loader from './components/Loader';

const allCategories = categoryData.map(event => event.id)

function App() {
  const initialValue = allCategories.map(i => ({name: i, active: false}))
  initialValue[12]['active'] = true

  const [showEvent, setShowEvent] = useState(initialValue)
  const [days, setDays] = useState('')
  const [eventData, setEventData] = useState([])
  const [openMenu, setOpenMenu] = useState(false)
  const [loading, setLoading] = useState(true)
 
  const clickHandler = (index) => {
    const newEvent = [...showEvent]
    newEvent[index]['active'] = !newEvent[index]['active']
    setShowEvent(newEvent)
  }
  
  useEffect(() => {
    const queryEvent = showEvent
      .filter(event => event.active)
      .map(e => e.name)
      .join(',')

    const fetchEvents = async () => {
      setLoading(false)
      const result = await axios(`https://eonet.gsfc.nasa.gov/api/v3/events?api_key=${process.env.REACT_APP_NASA_API_KEY}&category=${queryEvent}&days=${days}`)

      setEventData(result.data.events)
      setLoading(true)
    }
    fetchEvents()
  }, [showEvent, days])

  return (
    <div className="app">
        <div className="title">
          <h2>Natural Event Tracker</h2>
        </div>
        <div className="menu-toggle"  onClick={() => setOpenMenu(!openMenu)}>
          <div className={"menu-open " + (openMenu && "active")}>category</div>
          <div className={"menu-close " + (openMenu && "active")}>X</div>
        </div>
        <div className={"menu " +  (openMenu && "active")}>
          <Days className={"days"} days={days} setDays={setDays}/>
          <Categories className={"categories-menu " + (openMenu && "active")} showEvent={showEvent} onClick={clickHandler} />
        </div>
        <Map eventData={eventData} />
        {!loading && <Loader />}
    </div>
  );
}

export default App;
