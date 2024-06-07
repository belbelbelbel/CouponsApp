import Lottie from "lottie-react"
import animatedData from "../Style/Animation1.json"
export const Text = () => {
  return (
    <div className=' [84vh] w-screen  text-black text'>
      <div className='flex py-[2rem] flex-col w-[8we8%] etxt-center justify-center mx-auto  items-center relative -top-[1rem]'>
        <div className='w-[80vw] xl:w-[36vw]  md:w-[70%]  max-h-[66vh] flex rounded-[100%] bg-transparent' >
          <Lottie animationData={animatedData}></Lottie>
        </div>
        <div className='flex flex-col relative  -top-[2rem] md:-top-[5vw] gap-[0.7rem] md:gap-[0.5rem]'>
          <div className='text-center  md:w-[65%] w-[77%] mx-auto text-[5.5vw] xl:text-[2.8vw] md:text-[5vw] font-medium  md:leading-[3rem] text-black '>A shopping tool that does all the work</div>
          <div className='text-[#524b4b] md:racking-wide text-center  w-[90%] text-[3.0vw] md:text-[2.5vw] xl:text-[1vw] mx-auto md:w-[71%]'>Add Honey to your computer in seconds and we’ll search for coupons1 and rewards. All you have do is shop like normal.</div>
        </div>
      </div>
    </div>
  )
}