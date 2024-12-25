import { useState } from 'react'
import { BrandExample } from './components/Navbar';
import Post from './components/Card';
import './App.css'

function App() {
  
  return (
    <>
  <div className="App">
      <BrandExample />
    </div>
    <div className="post col-12 gap-3">
      <h1><center> Our Products</center></h1>
      <Post />
    </div>
    </>
    
  )
}

export default App
