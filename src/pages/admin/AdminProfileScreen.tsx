import { Link } from "react-router-dom"
import img from "../../assets/farm.jpg"
import {AiOutlineMessage,AiOutlinePhone, AiOutlineMail} from "react-icons/ai"
const AdminProfileScreen = () => {
  return (
    <div className="w-[230px] small:hidden mobile:hidden rounded-[10px] small:w-[80%] mobile:w-[80%] h-[100vh] bg-[white] flex justify-center overflow-hidden ">
      <div className="w-[90%]  ">
        <div className="mt-[10px] w-[100%] flex justify-center flex-col items-center ">
         <Link to="/admin/profile">
         <img className="w-[130px] h-[150px] rounded-[50%] object-cover small:w-[80px] small:h-[100px] mobile:w-[80px] mobile:h-[100px] hover:cursor-pointer hover:scale-[1.05] transition-all duration-700 " 
          src={img} alt={img} />
         </Link>
          <div className="font-bold text-[12px] mt-[20px] hover:text-[#456104] transition-all hover:cursor-pointer ">Onyemaobi Jecinta Ugochi</div>
          <div className="font-bold text-[12px] hover:text-[#456104] transition-all hover:cursor-pointer  ">onyemaobijecintaugochi@gmail.com</div>
          <div className="font-bold text-[12px] hover:text-[#456104] transition-all hover:cursor-pointer  ">https://onyemaobijecinta</div>
          <div className="font-bold text-[12px] hover:text-[#456104] transition-all hover:cursor-pointer  ">instagram.com</div>
        </div>
        <div className="w-[100%] flex justify-center gap-[20px] items-center mt-[20px] font-bold text-[20px] ">
          <AiOutlineMessage/>
          <AiOutlinePhone/>
          <AiOutlineMail/>
                    </div>
                    <div className="w-[100%] mt-[30px] tablet:mt-[50px] ">
                    <div className="text-[15px] font-bold small:text-[13px]  mobile:text-[13px] ">About Me</div>
                    <div className=" mt-[20px] text-[12px] text-[#c8c7c7] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure maxime praesentium amet officiis incidunt, deleniti esse odit soluta quo sunt fuga illum ab aspernatur ea dignissimos laudantium, temporibus corrupti excepturi? Nemo perferendis et dolore.</div>
                    </div>
                    <div className="w-[100%] mt-[30px] tablet:mt-[50px]  flex justify-between items-center ">
                      <div>
                        <div className="text-[13px] font-bold"> Name</div>
                        <div className="text-[12px]">Crystal Store</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-bold"> Email</div>
                        <div className="text-[12px]">crystals@gmail.comtore</div>
                      </div>
                    </div>
                    <div className="w-[100%] mt-[10px]  flex justify-between items-center ">
                      <div>
                        <div className="text-[13px] font-bold"> Role</div>
                        <div className="text-[12px]">Admin</div>
                      </div>
                      <div>
                        <div className="text-[13px] font-bold">Store Email</div>
                        <div className="text-[12px]">crystals@gmail.comtore</div>
                      </div>
                    </div>
                    <div className="w-[100%] h-[70px] mt-[20px] tablet:mt-[35px] ">
                      <div className="text-[13px] font-bold">Other Admin</div>
                     <div className="flex gap-[6px] items-center tablet:mt-[20px] ">
                     <img 
                      className="w-[30px] h-[30px] rounded-[50%] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 "
                      src={img} alt={img} />
                       <img 
                      className="w-[30px] h-[30px] rounded-[50%] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 "
                      src={img} alt={img} />
                       <img 
                      className="w-[30px] h-[30px] rounded-[50%] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 "
                      src={img} alt={img} />
                     </div>
                    </div>
      </div>
    </div>
  )
}

export default AdminProfileScreen