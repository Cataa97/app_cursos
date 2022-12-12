import { useState } from 'react'
import { Courses } from './components/pages/Courses'
import { Create } from './components/pages/Create'
import { Home } from './components/pages/Home'
import { Rutas } from './routing/rutas'



function App() {


  return (
    <div className="layout">
      <Rutas />
    </div>
  )
}

export default App
