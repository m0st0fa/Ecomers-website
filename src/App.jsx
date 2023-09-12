import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime]=useState(0)

  const handleAddToBookmark = blog =>{
    const newBookmarks =[...bookmark, blog];
    setBookmark(newBookmarks)
  }

  const handleMarkAsRead = time =>{
 setReadingTime(readingTime + time)
  }



  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmark={bookmark}
        readingTime={readingTime}
        
        ></Bookmarks>
      </main>
      
    </>
  )
}

export default App
