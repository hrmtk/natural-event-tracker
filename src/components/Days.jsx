const Days = ({ days, setDays }) => {
  return (
    <div className="days">
      <select value={days} onChange={e => setDays(e.target.value)}>
          <option value="10">10 days</option>
          <option value="30">30 days</option>
          <option value="90">90 days</option>
          <option value="">All</option>
      </select>
    </div>
  )
}

export default Days
