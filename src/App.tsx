import { Navbar, Home, Contact, About, Stack, Works } from './components';

// import './App.css'

function App() {

  return (
    <div className=' container flex flex-col bg-black text-white place-items-center'>
      <Navbar/>
      <Home />
      <About />
      <Stack />
      <Works /> 
      <Contact />
    </div>
  )
}

export default App
