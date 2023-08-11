import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import CardLayout from './components/CardLayout'

function App() {
  return (
    <div style={{background:"#f5f6fa"}}>
    <Navbar />
    <SearchBar />
    <Filters />
    <CardLayout />
    </div>
  )
}

export default App