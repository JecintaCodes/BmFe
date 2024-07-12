import potato from "../assets/Secret Side Effects of Eating Oranges, Says Science.jpeg"
import egg from "../assets/• women.jpeg"
import fowl from "../assets/2ccb5a50-09ff-4b46-9605-77264ef9c550.jpeg"
import goods from "../assets/5a5c2e86-4c11-494c-bb59-e96879c9d51a.jpeg"
import farm from "../assets/African Beauty.jpeg"
import {AiFillAccountBook  } from "react-icons/ai";
import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import { slideInFromDown } from "../utils/motion"

const SecondCard = () => {
  return (
    <motion.div
   
    className="w-[90%] mt-[120px] small:mt-[-5px] mobile:mt-[20px] ">
      <motion.div
      variants={slideInFromDown}
      className="grid h-[420px] small:grid-cols-1 mobile:grid-cols-1 grid-cols-4 gap-3">
        <div className="grid grid-cols-1 small:grid-cols-1 rounded  "> 
        <img 
        className="w-[100%] h-[200px] object-cover hover:cursor-pointer "
        src={potato} alt={potato} 
       
        />
      <div className=" flex justify-center small:grid small:grid-cols-1 flex-col items-center  ">

      <div className="text-[15px] font-bold mobile:mt-[35px] mt-[-50px] small:mt-[-0px]  ">Sale out of 70% of Goods</div>
      <div className="text-[11px] mt-[15px] mobile:text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique recusandae reprehenderit illo doloribus, repellat fugiat accusantium,magnam nesciunt quidem vitae nostrum dolore suscipit est eum .</div>
        <div className="text-[13px] text-[white] mt-[10px] font-bold ">Latest Goods</div>
        <Link to="/auth">
        <div className="flex justify-center items-center mt-[15px] w-[100px] text-[13px] gap-1 bg-[#fa9608] h-[35px] text-white rounded p-1 hover:scale-[1.05] duration-700 cursor-pointer ">
             <button type="button">Register</button>
              <AiFillAccountBook />
            </div>
             </Link>
      </div>
        </div>
        <div className="grid col-span-3  mobile:h-[200px] small:grid-cols-1  gap-2">
          <div className="grid grid-cols-3 h-[200px] gap-2">
            <div className="grid tablet:h-[200px] h-[20%] col-span-2">
              <img
              className="w-[100%] h-[200px] object-cover "
              src={fowl} alt={fowl} />
            </div>
            <div className="grid grid-cols-1 tablet:h-[200px] col-span-1    ">
            <img
              className="w-[100%] h-[200px] object-cover "
              src={goods} alt={goods} />
            </div>
          </div>
          <div className="grid grid-cols-3  h-[200px] gap-2">
            <div className="grid col-span-1 h-[200px]   ">
            <img
              className="w-[100%] h-[200px] object-cover "
              src={egg} alt={egg} />
            </div>
            <div className="grid grid-cols-1 col-span-2 h-[200px]    ">
            <img
              className="w-[100%] h-[200px] object-cover "
              src={farm} alt={farm} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SecondCard;
