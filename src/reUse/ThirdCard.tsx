import plantain from "../assets/5 Tips for Picking a Perfect Melon.jpeg"
import berry from "../assets/Cherry Nutrition Facts and Health Benefits.jpeg"
import hen from "../assets/21763902-9507-47ab-a251-708fa5a27702.jpeg"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import { slideInFromDown } from "../utils/motion"


const ThirdCard = () => {

    const data = [
        {
        image:`${plantain}`,
        title:"Lorem ipsum dolor sit.",
        details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ad fugit id natus maiores quibusdam reiciendis laboriosam quis delectus,",
        butt:"Purchase",
        },
        {
        image:`${berry}`,
        title:"Lorem ipsum dolor sit.",
        details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ad fugit id natus maiores quibusdam reiciendis laboriosam quis delectus,",
        butt:"Purchase",
        },
        {
        image:`${hen}`,
        title:"Lorem ipsum dolor sit.",
        details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ad fugit id natus maiores quibusdam reiciendis laboriosam quis delectus,",
        butt:"Purchase",
        },

    ]

  return (
    <motion.div
    initial= "hidden"
    animate="visible"
    className=" flex gap-[20px] small:flex small:justify-center small:items-center small:flex-wrap mobile:flex-wrap small:w-[100%] small:mt-[-70px] mobile:mt-[-10px]  ">
        {
             data?.map((props:any)=>{
                return(
                    <motion.div
                    variants={slideInFromDown}
                   
                    className=" h-[350px] tablet:w-[170px] bg-[#fa9608] w-[200px] rounded overflow-hidden small:h-[450px] small:w-[40%] mobile:h-[400px] mobile:w-[45%] mt-[40px] small:mt-[0] mobile:mt-[0] ">
            <img 
            className="w-[100%] h-[55%] object-cover rounded hover:scale-[1.05] hover:cursor-pointer transition-all duration-700  "
            src={props?.image} alt={plantain} />
            <div className=" mt-[5px] ">
                <div className="text-[15px] font-bold text-center ">{props?.title}</div>
                <center>
                    <div className="w-[100%] text-[12px] mt-[5px] ">{props?.details} </div>
                   <Link to="/sign-up">
                   <button className="mt-[5px] h-[35px] p-[10px]  rounded-[30px] text-[10px] outline-none font-bold text-[white] hover:scale-[1.05] bg-[#456104]  hover:cursor-pointer transition-all duration-700 "
                
                   >{props?.butt}</button>
                   </Link>
                </center>
            </div>
        </motion.div>
)
             })
            
        }
    </motion.div>
  )
}

export default ThirdCard