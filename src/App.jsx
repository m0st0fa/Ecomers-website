import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleAddToBookmark = blog =>{
    console.log('Bookmarks adding soon')
  }


  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmarks></Bookmarks>
      </main>
      
    </>
  )
}

export default App