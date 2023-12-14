import { useState } from 'react'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Scene from './components/three/Scene';

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

        </div> 
        :
        <div className='h-[100vh] w-[100vw] overflow-hidden'>
          <Scene />
          <img src='esc-w.svg'
            className='fixed top-10 right-10 cursor-pointer'
            onClick={toggleCanvas}/>
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
