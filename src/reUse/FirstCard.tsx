import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import {TiShoppingCart} from "react-icons/ti";
import ing from "../assets/1 (57).jpg";

const FirstCard = () => {

    const data = [
        {
            bigText:"Mark Book Pro",
            smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores facilis.",
            price:"₦ 600,000"
        },
        {
            bigText:"Lenovo Px",
            smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores facilis.",
            price:"₦ 780,000"
        },
        {
            bigText:"Lenovo Px",
            smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores facilis.",
            price:"₦ 780,000"
        },
        {
            bigText:"Lenovo Px",
            smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores facilis.",
            price:"₦ 780,000"
        },
       
    ]

    const state = [
        {
            bigText:"IPad Book Pro",
            smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores facilis.",
            price:"₦ 1,000,000"
        },
        {
            bigText:"Apple Laptop ",
            smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores facilis.",
            price:"₦ 2,000,000"
        },
        {
            bigText:"Tinkpad Pro",
            smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores facilis.",
            price:"₦ 300,000"
        },
        {
            bigText:"Tinkpad Pro",
            smallText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores facilis.",
            price:"₦ 300,000"
        },
    ]

  return (
    <div className="w-[95%] h-[100%] p-6 ">
      <div className="w-[100%] flex justify-between ">
        <div className="text-[15px] font-semibold ">Popular Products</div>
        <div className="flex justify-center items-cente gap-3 text-[13px">
          <AiOutlineLeft
          className="w-[23px] p-1 h-[23px] font-bold rounded-[50%] bg-[white] "
          />
          <AiOutlineRight
           className="w-[23px] p-1 h-[23px] font-bold rounded-[50%] bg-[white] "
          />
        </div>
      </div>
      
      {/* card */}
      <div className="mt-[20px] flex justify-center items-center flex-wrap gap-[30px] mobile:gap-[20px] ">
    
    {
        data?.map((props:any)=>(
            <div className="w-[200px] mobile:w-[150px] h-[250px] flex justify-center flex-col items-center  bg-[white] rounded-md p-2  ">
            <img className="w-[50%] h-[30%] object-cover " src={ing} alt={ing} />
            <div className="text-[13px] font-bold mt-[10px] ">{props.bigText}</div>
            <div className="text-[11px] text-center font-medium  ">
              {props.smallText}
            </div>
            <div className="flex text-[12px] justify-between font-bold mt-[8px] ">
              <div>⭐⭐⭐⭐⭐</div>
              <div>{props.price}</div>
            </div>
            <div className="flex justify-center items-center mt-[15px] w-[100px] text-[13px] gap-1 bg-[blue] h-[35px] text-white rounded p-1 ">
              <button type="button">Cart</button>
              <TiShoppingCart/>
            </div>
          </div>
        ))
    }

      </div>
      <div className="text-[15px] font-semibold mt-[30px] ">Featured Products</div>
      <div className="mt-[20px] flex justify-center items-center flex-wrap gap-[30px]  ">
    
    {
        state?.map((props:any)=>(
            <div className="w-[200px] h-[250px] flex justify-center flex-col items-center  bg-[white] rounded-md p-2  ">
            <img className="w-[50%] h-[30%] object-cover " src={ing} alt={ing} />
            <div className="text-[13px] font-bold mt-[10px] ">{props.bigText}</div>
            <div className="text-[11px] text-center font-medium  ">
              {props.smallText}
            </div>
            <div className="flex text-[12px] justify-between font-bold mt-[8px] ">
              <div>⭐⭐⭐⭐⭐</div>
              <div>{props.price}</div>
            </div>
            <div className="flex justify-center items-center mt-[15px] w-[100px] text-[13px] gap-1 bg-[blue] h-[35px] text-white rounded p-1 ">
              <button type="button">Cart</button>
              <TiShoppingCart/>
            </div>
          </div>
        ))
    }

      </div>
      {/* end card */}
    </div>
  );
};

export default FirstCard;
