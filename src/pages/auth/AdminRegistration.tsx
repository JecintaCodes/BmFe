import { Link, useNavigate} from "react-router-dom"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import { createAdmin } from "../../api/AdminRegister"
import { useState } from "react"
// import { useSelector } from "react-redux"


const AdminRegistration = () => {
  const [loading,isLoading] = useState<boolean>(false)
//   const [code,setCode] = useState<string>("")
//   const [error,setError] = useState(null)
// const admin = useSelector((state:any)=>state?.myAdmin)

  const navigate = useNavigate();

  const schema = yup.object({
    name:yup.string().required(),
    secretCode:yup.string().required(),
    email:yup.string().required().lowercase(),
    password:yup.string().required(),
    confirm: yup.string().required().oneOf([yup.ref("password")])
  })

  const {register,handleSubmit} = useForm({
    resolver:yupResolver(schema)
  })

  const onHandleSubmit = handleSubmit(async(data:any)=>{
    console.log("handle submit", data)
    isLoading(true)
    createAdmin(data).then(()=>{
      navigate("/admin-sign-in")
    })
  })
  console.log(loading)


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
    <form 
    onSubmit={onHandleSubmit}
    
    className="w-[350px] small:w-[80%] mobile:w-[80%] mobile:text-[14px] p-[20px] rounded bg-[white] min-h-[400px]  ">
        <div className="text-center font-semibold text-[18px] text-[#b5b1b1] small:text-[14px] ">Registration</div>
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="text" placeholder="secretCode "  {...register("secretCode")} />
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="text" placeholder="Jecinta  "
        {...register("name")}
        />
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="email" placeholder="Jecinta@gmail.com  " {...register("email")}/>
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "  type="password" placeholder="jecinta@gmail.com " {...register("password")} />
        <input 
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px] outline-none placeholder:text-[12px] placeholder:text-[#d1cdcd] bg-transparent border-[2px] text-[12px] "
        type="password" placeholder="jecinta@gmail.com " {...register("confirm")} />
        
        <button
        
        className="w-[100%] h-[50px] mt-[20px] rounded p-[10px]    hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 "
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
            <Link to="/admin-sign-in">
            <div>Sign in</div>
            </Link>
        </div>

    </form>
</div>
  )
}

export default AdminRegistration