
import cap from "../assets/Photo d'une jeune femme surprise étonnée et excitée _ Photo Premium.jpeg"
import fork from "../assets/lime (by pingwynne).jpeg"
import fork1 from "../assets/naranja 50uni (1).jpeg"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import { slideInFromLeft, slideInFromRight, } from "../utils/motion"

const Welcome = () => {
  return (
    <div className="mt-[50px] small:w-[100%] mobile:mt-[200px] small:mt-[300px] ">
     <motion.div  
     initial="hidden"
     animate="visible"
     
     >

     <motion.div
     className=" h-[400px] small:w-[100%] mt-[30px] flex justify-between items-center mobile:flex-col-reverse text-[30px] small:flex-col-reverse ">
       <motion.div
       variants={slideInFromLeft(0.6)}
       className="w-[50%] small:hidden mobile:hidden small:w-[100%] ">
       <img
        className="w-[100%] object-contain  "
        src={fork1} alt={fork1} />
       </motion.div>

        <motion.div 
        variants={slideInFromRight(0.6)}
        className="w-[50%] small:w-[100%] rounded-sm mobile:mt-[500px] mobile:w-[100%]    ">
        <div 
        className=" text-center font-bold text-[18px] mt-[-5px] mr-[230px] small:w-[100%] mobile:w-[100%] small:mt-[20px] ">Welcome to Boundary Markert</div>
            <div         
            className=" small:w-[100%] small:mr-[0px] small:ml-[20px] mr-5 text-[11px] mobile:ml-[20px] mobile:mr-[5px] font-normal mt-[40px] mobile:text-center mobile:w-[100%] small:mt-[-px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ex eligendi eos possimus, dolore tempore architecto assumenda cumque earum accusantium voluptas est ipsum aliquid iure delectus ullam. Vero dolorem minima obcaecati excepturi dolorum perferendis eos pariatur molestias ut quia expedita consectetur culpa fuga, velit tempore id sit eum officia magnam.</div>
           <div className="flex justify-between mr-5 small:flex-row-reverse mobile:justify-center mobile:items-center mobile:gap-1 mobile:mr-[0px]   small:mt-[20px] mobile:flex-wrap ">
           <motion.div className="h-[100px] w-[300px] flex items-center   ">
                <div className="w-[25%] ">
                    <img 
                    className="w-[100%] object-cover "
                    src={fork} alt={fork} />
                </div>
                <div className="w-[75%] small:mr-[20px] ">
                    <div className="text-[13px] font-bold ">Lorem ipsum dolor </div>
                    <div className=" text-[11px] mt-[10px] font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis.</div>
                </div>
            </motion.div>
            <div className="h-[100px] w-[300px] flex items-center  ">
                <div className="w-[25%] ">
                    <img 
                    className="w-[100%] object-cover "
                    src={cap} alt={cap} />
                </div>
                <div className="w-[75%] ">
                    <div className="text-[13px] font-bold ">Lorem ipsum dolor </div>
                    <div className=" text-[11px] mt-[10px] font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis.</div>
                </div>
            </div>
           </div>
           <div className="flex justify-between mobile:flex-wrap-reverse mr-5 mobile:justify-center small:mr-[0px] small:mt-[20px]  ">
           <div className="h-[100px] w-[300px] flex items-center  ">
                <div className="w-[25%] ">
                    <img 
                    className="w-[100%] object-cover "
                    src={cap} alt={cap} />
                </div>
                <div className="w-[75%] ">
                    <div className="text-[13px] font-bold ">Lorem ipsum dolor </div>
                    <div className=" text-[11px] mt-[10px] font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis.</div>
                </div>
            </div>
            <div className="h-[100px] w-[300px] flex items-center  ">
                <div className="w-[25%] ">
                    <img 
                    className="w-[100%] object-cover "
                    src={fork} alt={fork} />
                </div>
                <div className="w-[75%] ">
                    <div className="text-[13px] font-bold ">Lorem ipsum dolor </div>
                    <div className=" text-[11px] mt-[10px] font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis.</div>
                </div>
            </div>
           </div>
         <Link to="/sign-in">
         <button className=" mobile:mt-[30px] p-[7px] w-[130px] small:ml-[100px] small:mt-[15px] h-[40px] text-[12px] font-bold bg-[#fa9608] text-[white] rounded mobile:ml-[220px] hover:scale-[1.05] transition-all duration-700 outline-none ">Lorem, ipsum.</button>
         </Link>
         </motion.div>
        </motion.div>
       </motion.div>
    </div>
  )
}

export default Welcome