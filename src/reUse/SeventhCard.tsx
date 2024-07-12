import market from "../assets/Portrait of a smiling beautiful woman standing alone on a yellow background.jpeg"
import {motion} from "framer-motion"
import { slideInFromDown } from "../utils/motion"

const SeventhCard = () => {
  return (
    <motion.div
    variants={slideInFromDown}
    // animate={{
    //     x: 0,
    //     y: 0,
    //     scale: 1,
    //     rotate: 0,
    // }}
    className="mt-[70px] ">
        <div className="w-[100%] small:w-[100%] mobile:w-[100%] h-[500px] small:h-[700px] flex justify-center small:flex-col mobile:flex-col  ">
            <div className="w-[45%] mr-[30px] small:h-[50%] mobile:h-[50%] small:w-[100%] h-[100%] overflow-hidden mobile:w-[100%]  ">
                <img
                className="w-[100%] h-[100%] object-cover hover:scale-[1.05] cursor-pointer transition-all duration-700 "
                src={market} alt={market} />
            </div>
            <div className=" w-[50%] small:w-[100%] small:h-[50%] mobile:h-[50%] mobile:w-[100%] h-[100%] ">
                <div className="text-[25px] small:text-[15px] mobile:text-[15px] font-bold small:ml-[30px] w-[100%]  mt-[50px] mobile:w-[100%] small:mt-[20px] mobile:mt-[30px] ">We Offer You The Best Quality Services</div>
                <div className=" mobile:ml-[10px] text-[#a6a5a5] mt-[20px] text-[15px] font-medium small:w-[100%] mobile:w-[100%] small:text-[12px] mobile:text-[12px] mobile:text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus nam deleniti, veritatis accusantium repellendus porro suscipit vero officia quaerat asperiores delectus tenetur dolor? Sed debitis ipsum eligendi ipsam optio quisquam.</div> 
                <div className="mt-[20px] small:mt-[10px]  ">
                    <div className=" flex gap-[20px] justify-center ">
                        <input className="bg-[#fa9608]" type="checkbox" checked />
                        <div className="font-semibold text-[16px] small:text-[16px] mobile:text-[13px] ">Lorem ipsum dolor sit amet consectetur </div>
                    </div>
                    <div className=" flex gap-[20px] mt-[20px] justify-center ">
                        <input className="bg-[#fa9608]" type="checkbox" checked />
                        <div className="font-semibold small:text-[16px] mobile:text-[13px]  text-[16px] ">Lorem ipsum dolor sit amet consectetur </div>
                    </div>
                    <div className=" flex gap-[20px] mt-[20px] justify-center ">
                        <input type="checkbox" className="bg-[#fa9608]" checked />
                        <div className="font-semibold small:text-[16px] mobile:text-[13px]  text-[16px] ">Lorem ipsum dolor sit amet consectetur </div>
                    </div>

                </div>
                <div className="flex justify-center items-center mt-[30px] w-[150px] small:w-[100px] small:p-[10px] p-[20px] text-[13px] gap-1 bg-[#fa9608] h-[50px] text-white rounded hover:scale-[1.05] duration-700 cursor-pointer ml-[50px] mobile:w-[100px] mobile:p-[10px] mobile:mt-[15px] ">
                    <button>Read More</button>
                    </div>
            </div>
        </div>
    </motion.div>
  )
}

export default SeventhCard