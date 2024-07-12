import { Link } from 'react-router-dom'

const UserRegistration = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center  "
  style={{
    background:"rgba(179, 184, 231, 0.25)",
    boxShadow:" 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
    backdropFilter:"blur( 4px )",
    WebkitBackdropFilter:" blur( 4px )",
    // border:"1px solid rgba( 255, 255, 255, 0.18 )",
  }}
    >
    <form className="w-[350px] small:w-[80%] mobile:w-[80%] mobile:text-[14px] p-[20px] rounded bg-[white] min-h-[400px]  ">
        <div className="text-center font-semibold text-[18px] text-[#b5b1b1] small:text-[14px] ">Registration</div>
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="text" placeholder="secretCode " />
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="text" placeholder="Jecinta  " />
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="email" placeholder="Jecinta@gmail.com  " />
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "  type="password" placeholder="jecinta@gmail.com "/>
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="password" placeholder="jecinta@gmail.com   " />
        
        <button className="w-[100%] h-[50px] mt-[20px] rounded p-[10px]  hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 "
        type="submit"
         
        style={{
          background:"rgba(179, 184, 231, 0.25)",
          boxShadow:" 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
          backdropFilter:"blur( 4px )",
          WebkitBackdropFilter:" blur( 4px )",
        }}
        >Sign Up</button>
        <div className="w-[100%] h-[50px] mt-[20px] flex justify-center gap-2 text-[12px] ">
            <div>Already have an account?</div>
            <Link to="/user-sign-in">
            <div>Sign in</div>
            </Link>
        </div>

    </form>
</div>
  )
}

export default UserRegistration