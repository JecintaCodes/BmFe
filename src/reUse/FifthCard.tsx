import { Link } from "react-router-dom"
import fruit from "../assets/goods.jpg"
import {AiOutlineAccountBook} from "react-icons/ai"

const FifthCard = () => {

  return (
    <div className="mt-[100px] ">
        <div className="w-[100%] h-[350px] small:w-[100%] mobile:w-[100%] bg-black ">
            <img 
            className="w-[100%] h-[100%] object-cover "
            src={fruit} alt={fruit} />
           <Link to="/sign-up">
           <div className="flex justify-center items-center mt-[-190px] w-[100px] mobile:ml-[160px] small:ml-[-150px] text-[18px] font-bold gap-1 bg-orange-400 h-[50px] text-white rounded p-1 hover:scale-[1.05] duration-700 cursor-pointer ml-[470px] small:text-[13px] ">
              <button type="button">Register</button>
              <AiOutlineAccountBook />
            </div>
           </Link>
        </div>
        {/* <div className=" ">
            <div className="w-[200px] h-[250px] rounded cursor-pointer bg-[#18fb18a9] p-2 ">
                <div className="text-center text-[17px] font-semibold ">Lorem ipsum dolor sit amet.</div>
                <div className="text-[13px] font-[medium]  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, autem?</div>
            </div>
        </div> */}
    </div>
  )
}

export default FifthCard

// style={{
//   background:"rgba(179, 184, 231, 0.25)",
//   boxShadow:" 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
//   backdropFilter:"blur( 4px )",
//   WebkitBackdropFilter:" blur( 4px )",
// }}