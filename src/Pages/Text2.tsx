import React from 'react'
import Lottie from 'lottie-react'
import animatedData from "../Style/Animation - 1717366044619.json"
export const Text2 = () => {
  return (
    <div className='bg-[#ecf7f8] w-screen py-[3.5rem]  text-black text'>
      <div className='flex py-[2rem] flex-col w-[100%] mx-auto  text-center justify-center items-center relative -top-[0rem]'>
        <div className='w-[80vw] xl:w-[32vw] mx-auto  md:w-[50%] text-center  max-h-[40vh] flex rounded-[100%] bg-transparent' >
          <Lottie animationData={animatedData}></Lottie>
        </div>
        <div className='flex flex-col relative  -top-[0rem] md:-top-[0rem] gap-[0.7rem] md:gap-[0.5rem]'>
          <div className='text-center   xl:max-w-[35%] md: max-w-[65%]  mx-auto text-[5.5vw] xl:text-[3vw] font-medium md:leading-[3rem] md:text-[5.5vw] xl:text-[3rem] xl:leading-[3rem] text-[#195154] '>Earn gift cards just for shopping</div>
          <div className='text-[#524b4b] md:racking-wide text-center w-[90%]  text-[3.5vw] xl:text-[1vw] md:text-[2.5vw] my-[1vw] mx-auto md:w-[75%]  xl:w-[52%]'>
            Score Gold Rewards on your eligible purchases at some of your favorite stores. Once you earn enough, redeem it for gift cards that you can use to keep shopping2.
          </div>
        </div>
      </div>
    </div>
  )
}
