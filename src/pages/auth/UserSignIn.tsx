import { Link } from "react-router-dom"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import {useForm} from "react-hook-form"
// import useBuyer from "../../components/global/jotai"
// import { createBuyer } from "../../api/BuyerApi"


const UserSignIn = () => {

//   const navigate = useNavigate();

//   const [state , setState] = useBuyer()

//   const schema = yup.object({
//     email:yup.string().required(),
//     password:yup.string().required(),
//   })

// const {register, handleSubmit} = useForm({
//   resolver:yupResolver(schema)
// })

// const onHandleSubmit = handleSubmit(async (data:any)=>{
//   console.log("handle submit", data)
//   createBuyer(data).then((res:any)=>{
//     setState(res);
//     navigate("/product");
//   })
// })



  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center  "
    style={{
      background:"rgba(179, 184, 231, 0.25)",
      boxShadow:" 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
      backdropFilter:"blur( 4px )",
      WebkitBackdropFilter:" blur( 4px )",
    }}
      >
    <form 
    className="w-[350px] small:w-[70%] mobile:w-[70%] p-[20px]  overflow-hidden rounded bg-[white] min-h-[300px]  ">
        <div className="text-center font-semibold text-[16px] text-[#b5b1b1] ">Sign In User</div>
      
       <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="email" placeholder="Jecinta@gmail.com  " />
      
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="password" placeholder="Jecinta@gmail.com   "  />
       
        <button className="w-[100%] h-[50px] mt-[20px] rounded p-[10px]  bg-slate-400 text-[white] hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 "
        type="submit"

  style={{
    background:"rgba(179, 184, 231, 0.25)",
    boxShadow:" 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
    backdropFilter:"blur( 4px )",
    WebkitBackdropFilter:" blur( 4px )",
  }}
  
    > 
   
        Sign In</button>
        <div className="w-[100%] h-[50px] mt-[20px] flex justify-center gap-2 text-[12px] ">
            <div>Don't have an account?</div>
            <Link to="/user-sign-up">
            <div>Sign up</div>
            </Link>
        </div>

    </form>
</div>
  )
}

export default UserSignIn