import React,{useState} from 'react'




function Calculatorapp() {
   const [number,setNumber]=useState('');

   const handleClick=(e)=>{
       setNumber(number.concat(e.target.value))
   }

   const handleClear=()=>{
       setNumber('')

   }

   const handleSlice=()=>{
       setNumber(number.slice(0, -1))
   }

   const handleAns=()=>{
       try{
           setNumber(eval(number).toString())
       }catch(error){
           setNumber('Invalid')
       }
   }

   


  return (
    <>
   
        <section>
            <div className='bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden my-10'>
                <div className='text-gray-200 w-full font-bold h-16 text-3xl mt-2 items-center text-center pl-2 '>
                    
                    <h1> CALCULATOR APP</h1>
                </div>
                <div className='w-full h-20 '>
                    <input
                    type='text'
                    placeholder="0"
                    value={number}
                    className='w-full h-full border border-white bg-gray-900 text-4xl text-right pr-5 text-white'
                    />
                </div>

                <div className='grid grid-cols-4 gap-3 mt-10 mx-5'>
                    <button onClick={handleClear} className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-slate-300' >AC</button>
                    <button onClick={handleSlice} className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-slate-300'>C</button>
                    <button value='/' onClick={handleClick} className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-slate-300'>/</button>
                    <button value='+' onClick={handleClick} className='text-gray w-20  bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2 h-50 hover:bg-slate-300'>+</button>

                    <button value='7' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>7</button>
                    <button value='8' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>8</button>
                    <button value='9' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>9</button>
      

                    <button value='4' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>4</button>
                    <button value='5' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>5</button>
                    <button value='6' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>6</button>
                    <button value='-' onClick={handleClick} className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-slate-300'>-</button>

                    <button value='1' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>1</button>
                    <button value='2' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>2</button>
                    <button value='3' onClick={handleClick} className='text-white w-20 h-20 bg-gray-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-gray-600'>3</button>
                    <button value='*' onClick={handleClick} className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-slate-300'>*</button>

                    <button value='.' onClick={handleClick} className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-slate-300'>.</button>
                    <button value='0' onClick={handleClick} className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow hover:bg-slate-300'>0</button>
                    <button onClick={handleAns} className='text-gray w-59 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2 hover:bg-slate-300'>=</button>

                   </div>


                </div>
               
               
        </section>
    

    </>
  )
}

export default Calculatorapp