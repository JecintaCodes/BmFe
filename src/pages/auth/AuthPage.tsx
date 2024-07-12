import { Link } from "react-router-dom"

const AuthPage = () => {
  return (
    <div className=" w-[100%] h-[100vh] flex justify-center items-center "
    style={{
      background:"rgba(179, 184, 231, 0.25)",
      boxShadow:" 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
      backdropFilter:"blur( 4px )",
      WebkitBackdropFilter:" blur( 4px )",
    }}
    >
        <div className="bg-white mobile:w-[50%] mobile:p-[5px] mobile:h-[25%] small:w-[50%] small:h-[25%] w-[300px] h-[300px] rounded small:p-[5px] p-20  ">
          <Link to="/admin-sign-in">
          <div className="text-[12px] mobile:text-[13px] mobile:text-center small:text-center small:font-semibold small:text-[12px] font-bold mt-[20px] text-[#456104] ">sign in as an Admin</div>
          </Link>

           <Link to="/user-sign-in">
           <div className="text-[15px] mobile:text-[13px] mobile:text-center small:text-center small:font-semibold small:text-[12px] mt-[20px] font-bold text-[#fa9608] ">sign in as a User</div>
           </Link>

           <Link to="/sign-in" >
           <div className="text-[15px] mobile:text-[13px] mobile:text-center small:text-center small:text-[12px] mt-[20px] text-[#456104] font-bold  small:font-semibold ">sign in as a Buyer</div>
           </Link>
        </div>
    </div>
  )
}

export default AuthPage