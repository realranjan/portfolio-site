import React from 'react'
import Header from './components/Header'
import Now from './components/Now'
import Experience from './components/Experience'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 py-20 px-4 font-['Geist']">
      <div className="max-w-2xl mx-auto space-y-12 sm:space-y-16">
        {/* Header Section */}
        <Header />
        
        {/* NOW Section */}
        <Now />
        
        {/* EXPERIENCE Section */}
        <Experience />
        
        {/* SELECTED WORK Section */}
        <Work />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App