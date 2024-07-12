import { Link } from "react-router-dom";
import img from "../../assets/plantain.jpg"
const Shops = () => {
  return (
    <div className="flex mt-[30px] justify-center flex-wrap">
           
    <div
      className="w-[200px] small:w-[40%] mobile:w-[45%] 0 overflow-hidden h-[265px] m-2 flex justify-center gap-[20px] items-center flex-col  "
    >
      <Link
      className="w-[100%]"
      to="/detail-pro">
        <img
          className="w-[100%] h-[200px] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 transition-all"
          src={img}
        />
      </Link>

      <div className="w-[100%] h-[100px] mt-[-15px] ">
        <div className="flex justify-bettween gap-[5px] items-center">
          <img
          className="w-[45px] h-[45px] rounded-[50%] hover:cursor-pointer hover:scale-[1.05] duration-700 transition-all  "
          src={img} alt={img} />
          <div>
            <div className="text-[12px] font-bold ">Jecinta Ugochi Stores</div>
            <div className="text-[12px] font-bold ">jecintaugochi@gmail.com</div>
            <div className="text-[12px] font-bold ">https://jecintaugochistore</div>
          </div>
        </div>
      </div>

     
    </div> 
      </div>
  )
}

export default Shops