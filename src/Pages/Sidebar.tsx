import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import {motion} from "framer-motion"
interface sidebarprops {
    show: boolean
    setshow: (value: boolean) => void
}
export const Sidebar = ({ show, setshow }: sidebarprops) => {
    const stopPropagation = (e:{stopPropagation : () => void}) => {
        e.stopPropagation()
    }
    return (
        <div className=' '>
            <div onClick={() => setshow(false)} className=''>
                <ul id="navbar" className={` ${show ? "#navbar active" : "#navbar"} `}>
                    <div className='flex justify-between items-center  w-full px-[1rem]  flex-row'>
                        <div className=' text-[1rem] text-[#212121] cursor-pointer font-black '>CoUpOnS</div>
                        {
                            show && <RxCross1 size="6vw" onClick={() => setshow(false)} />
                        }
                    </div>
                    <div className=' w-[27%] font-sans' onClick={stopPropagation} >
                        <motion.li ><a className='active' href="index.html">Joing</a></motion.li>
                        <li><a href="index.html">Shop</a></li>
                        <li><a href="index.html">Blog</a></li>
                        <li><a href="index.html">About</a></li>
                        <li><a href="index.html">Contact</a></li>
                        <li><a href="index.html">Contact</a></li>
                        <motion.li
                        ><a href="index.html">Contact</a></motion.li>
                        <motion.li><a href="index.html">Contact</a></motion.li>
                        <motion.li><a href="index.html">Contact</a></motion.li>
                        <motion.li><a href="index.html">Contact</a></motion.li>
                        <motion.li><a href="index.html">Contact</a></motion.li>
                        <motion.li><a href="index.html">Contact</a></motion.li>
                        <motion.li><a href="index.html">Contact</a></motion.li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
