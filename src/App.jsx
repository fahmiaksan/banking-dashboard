import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import RightContent from './components/RightContent'
import LeftContent from './components/LeftContent'

function App() {

  return (
    <>
      <div className='w-full h-[990px] bg-white flex flex-row'>
        <Sidebar />
        <section className='flex-1 bg-white'><LeftContent /></section>
        <section className='w-96 rounded-tl-70 px-8 overflow-hidden bg-sky-300 bg-opacity-10'>
          <RightContent />
        </section>
      </div>
    </>
  )
}

export default App
