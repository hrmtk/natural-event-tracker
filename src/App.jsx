import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { categoryData } from './data';
import './scss/App.scss';
import Categories from './components/Categories';
import Days from './components/Days';
import Map from './components/Map';
import Loader from './components/Loader';

const allCategories = categoryData.map(event => ({name: event.id, icon: event.icon, class: event.class}))

function App() {
  const initialValue = allCategories.map(event => ({name: event.name, icon: event.icon, class: event.class, active: false}))
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
      <div className="sidebar">
        <p>Natural Event Tracker</p>
        <Days className="days" days={days} setDays={setDays} />
        <Categories showEvent={showEvent} onClick={clickHandler} />
      </div>
      <div className="navbar">
        <Icon icon="ant-design:menu-unfold-outlined" className="hamburger" onClick={() => setOpenMenu(true)} />
        <h2>Natural Event Tracker</h2>
        <div></div>
      </div>
      {openMenu && (
        <div className="menu">
          <div className="menu-title">
            <p>Natural Event Tracker</p>
            <Icon icon="charm:circle-cross" className="close" onClick={() => setOpenMenu(false)} />
          </div>
          <Days className="days" days={days} setDays={setDays} />
          <Categories showEvent={showEvent} onClick={clickHandler} />
        </div>
      )
      }
      
      <Map eventData={eventData} />
      {!loading && <Loader />}
    </div>
  );
}

export default App;
