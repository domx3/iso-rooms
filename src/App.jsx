import { useState } from 'react'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Scene from './components/three/Scene';
import FrontPage from './components/FrontPage';

function App() {
  
  const [showCanvas, setShowCanvas] = useState(true);
  const toggleCanvas = ()=> {setShowCanvas(!showCanvas)}

  const setToast = (text) => {
    toast(text)
  }

  return (
    <>
      {!showCanvas ?
        <div>
          <Navbar 
            toggleCanvas={toggleCanvas} 
          />
          <FrontPage />
        </div> 
        :
        <div className='h-[100vh] w-[100vw] overflow-hidden'>
          <Scene />
          {/* <img src='esc-w.svg'
            className='fixed top-10 right-10 cursor-pointer'
            onClick={toggleCanvas}/> */}
          <div id="gym-banner" className='fixed bottom-[10%] portrait:bottom-[20%] left-[-340%] self-center w-[400%] z-[1000] flex justify-between lemon-font'>
            <p className='text-white font-semibold bg-slate-800 rounded-xl text-xl p-2'>Cardio</p>
            <p className='text-white font-semibold bg-slate-800 rounded-xl text-xl p-2'>Machines</p>
            <p className='text-white font-semibold bg-slate-800 rounded-xl text-xl p-2'>Functional</p>
            <p className='text-white font-semibold bg-slate-800 rounded-xl text-xl p-2' onClick={()=> window.scrollTo(0,200)}>Strength</p>
          </div>
        </div>
      }

      <div className='text-black'>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
    </>
  )
}

export default App
