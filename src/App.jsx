import { useState } from 'react'
import "./index.css";
function App() {
  const [color, setColor] = useState('gray')

  return (
    <>
      <div className='h-screen flex justify-center duration-300 transition-all ease-in-out items-center' style={{backgroundColor: color}}>
          <div className='flex flex-wrap bg-white sm:px-7 sm:py-5 p-4 sm:gap-4 gap-2 rounded-4xl'>
                <button className='bg-white shadow-md rounded-2xl shadow-black sm:px-6 sm:py-4 p-2 text-lg hover:scale-99 hover:inset-shadow-2xs hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out'
                onClick={()=>setColor("red")}>Red</button>
                <button className='bg-white shadow-md rounded-2xl shadow-black sm:px-6 sm:py-4 p-2 text-lg hover:scale-99 hover:inset-shadow-2xs hover:bg-green-500 hover:text-white transition-all duration-200 ease-in-out'
                onClick={()=>setColor("green")}
                >Green</button>
                <button className='bg-white shadow-md rounded-2xl shadow-black sm:px-6 sm:py-4 p-2 text-lg hover:scale-99 hover:inset-shadow-2xs hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out'
                onClick={()=>setColor("blue")}
                >Blue</button>
                <button className='bg-white shadow-md rounded-2xl shadow-black sm:px-6 sm:py-4 p-2 text-lg hover:scale-99 hover:inset-shadow-2xs hover:bg-pink-200 hover:text-white transition-all duration-200 ease-in-out'
                onClick={()=>setColor("pink")}
                >Pink</button>
          </div>
      </div>
    </>
  )
}

export default App
