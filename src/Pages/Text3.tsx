import Lottie from 'lottie-react'
import animatedData from "../Style/Animation - 1717368668541.json"
export const Text3 = () => {
    return (
        <div>
            <div className='bg-[whitesmoke] w-screen py-[3.5rem]  text-black text'>
                <div className='flex py-[2rem] flex-col w-[91%] mx-auto  items-center relative -top-[0rem]'>
                    <div className='w-[65vw] xl:w-[20vw] md:w-[50%]  max-h-[60vh] flex rounded-[100%] bg-transparent' >
                        <Lottie animationData={animatedData}></Lottie>
                    </div>
                    <div className='flex flex-col relative  -top-[0rem] md:-top-[0rem] gap-[0.7rem] md:gap-[0.5rem]'>
                        <div className='text-center  tracking-tight md:max-w-[100%]  max-w-[100%] mx-auto text-[5.5vw] md:text-[5vw] xl:text-[2.5vw] font-medium  md:leading-[3rem] text-[#195154] '>Apply coupons with a click</div>
                        <div className='text-[#524b4b] md:racking-wide text-center  text-[3.6vw]  xl:text-[1vw] md:text-[2.5vw] my-[0vw]  mx-auto md:w-[82%] xl:w-[55%]'>
                            We'll pop up at checkout to search for coupons. If we find working codes, we'll automatically apply the best savings we find to your cart.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
