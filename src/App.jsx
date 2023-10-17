import './App.css'
import Food from './components/Food'
import HeadlineCards from './components/HeadlineCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Category from './components/category'



function App() {  

  return (
    <>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </>
  )
}

export default App
