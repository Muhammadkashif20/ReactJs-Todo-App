// import React from "react"
// import { useState } from "react"
// const App = () => {
//   const [count,setCount]=useState(0)
//   const valuePositive=()=>{
//     setCount(count+1)
//   }
//   const valueNegative=()=>{
//     setCount(count-1)
//   }
//   const valueDefault=()=>{
//     setCount(0)
//   }
  
//   return (
//     <div className='ms-2 mt-2'>
//       <h1 className='font-semibold text-3xl text-center'>Hello world</h1>
//       <h2 className='font-semibold '>Move To ReactJs Hooks</h2>
//       <li>ReactJs UseState</li>
//       <div className="flex justify-center align-middle text-center flex-col ">
//       <h1 className="text-3xl">{count}</h1>
//       <button className='p-2 m-3 bg-blue-500 rounded-md text-white' onClick={valuePositive}>Increment</button>
//       <button className='p-2 m-3 bg-blue-500 rounded-md text-white' onClick={valueNegative}>Decrement</button>
//       <button className='p-2 m-3 bg-blue-500 rounded-md text-white' onClick={valueDefault}>Delete</button>
//       </div>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// let myName='Muhammad Kashif'
// const App = () => {
//   const [name,changeName]=useState('Muhammad')
//   const ubdateName=()=>{
//     changeName(myName)
//   }
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={ubdateName}>Change Name</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'
const App = () => {
    const [value,updatedValue]=useState("")
    const inputValue=(event)=>{
        updatedValue(event.target.value)
        console.log(event.target.value);
        
        
    }
  return (
    <div className='text-center'>
      <h1 className="text-3xl font-semibold m-3">My Todo App</h1>
      <div className='flex justify-center align-middle '>
      <input type="text" placeholder='Enter Your Text' className='p-2 m-2 border-2 rounded-md w-[20rem]' onChange={inputValue}/>
      <button  className='p-2 m-2 bg-blue-600 rounded-md text-white w-[4rem]'>Add</button>
      </div>
        <div>
            <span>Text 1</span>
            <button className='p-2 m-2 bg-red-600 rounded-md text-white'>Delete</button>
        </div>
    </div>
  )
}

export default App
