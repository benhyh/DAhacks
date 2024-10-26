import React from 'react'
import TemperatureCard from '../components/TemperatureCard'
import TempOverview from '../components/TempOverview'

const page = () => {
  return (
    <div className="page" style={{ backgroundImage: 'url(/mars.png)', backgroundSize: 'cover' }}>
      <TempOverview/>
    </div>
  )
}

export default page


