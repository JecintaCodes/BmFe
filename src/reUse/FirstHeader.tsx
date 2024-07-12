import {AiOutlineDown,AiOutlineProfile} from "react-icons/ai"
const FirstHeader = () => {
  return (
    <div className="w-[100%] h-[60px] bg-[blue] flex justify-center ">
        <div className=" w-[90%] small:w[100%] text-[white] flex justify-between items-center text-[15px] font-semibold ">
                <div>Logo</div>
                <div className="flex items-center gap-[3px] ">
                    <AiOutlineProfile/>
                    <div>Account</div>
                    <AiOutlineDown 
                className='text-[13px] mt-[5px] mr-[10px] font-bold '
                    />
                   
                </div>
            </div>
        </div>
  )
}

export default FirstHeader