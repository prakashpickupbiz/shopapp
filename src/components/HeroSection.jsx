import React from 'react'

export default function HeroSection() {
  return (
      <div className=' p-12 flex justify-around h-auto items-center  mb-12 rounded-tr-xl bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>

        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold'>Best Online Learning Resources</h1>
            <h2 className='text-2xl pt-12'>Make Your Free Account and & Get Discounts</h2>
              <button className='font-bold text-white rounded-2xl p-1 mt-8 w-1/4 bg-slate-400' >Enroll Now...</button>
        </div>
          <div><img className='rounded-s-full' src="https://blog.hocking.edu/hs-fs/hubfs/Images/Stock%20images/Rear%20view%20of%20students%20attentively%20listening%20to%20male%20teacher%20in%20the%20classroom.jpeg?width=552&name=Rear%20view%20of%20students%20attentively%20listening%20to%20male%20teacher%20in%20the%20classroom.jpeg" alt="" /></div>
    </div>
  )
}
