import ing from "../assets/1 (57).jpg";
import { TiShoppingCart } from "react-icons/ti";
const GridCard = () => {
  const data = [
    {
      bigText: "Mark Book Pro",
      smallText:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
      price: "₦600,000",
    },
    {
      bigText: "Lenovo Px",
      smallText:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
      price: "₦780,000",
    },
    {
      bigText: "Lenovo Px",
      smallText:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet.   ",
      price: "₦780,000",
    },
    {
      bigText: "Lenovo Px",
      smallText:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet.   ",
      price: "₦780,000",
    },
  ];

  const state = [
    {
      bigText: "IPad Book Pro",
      smallText:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet.   ",
      price: "₦1,000,000",
    },
    {
      bigText: "Apple Laptop ",
      smallText:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet.   Exercitationem, dolores facilis.",
      price: "₦2,000,000",
    },
    {
      bigText: "Tinkpad Pro",
      smallText:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet.  adipisicing elit. Exercitationem, dolores facilis.",
      price: "₦300,000",
    },
    {
      bigText: "Tinkpad Pro",
      smallText:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet.  adipisicing elit. Exercitationem, dolores facilis.",
      price: "₦300,000",
    },
  ];

  return (
    <div className="w-[97%] h-[100%]  p-2 ">
      <div className="text-[15px] font-semibold mt-[20px] ">Popular Products</div>
    <div className="flex justify-center w-full ">
    <div className="w-full grid grid-cols-4 small:grid-cols-2 mobile:grid-cols-2 gap-10 small:gap-2 ">
        {/* card */}
        {data?.map((props: any) => (
          <div className="h-[250px] small:h-[300px] bg-white rounded mt-[20px] flex justify-center flex-col p-2 items-center ">
            <img
              className="w-[30%] h-[30%] object-contain "
              src={ing}
              alt={ing}
            />
            <div className="text-[13px] font-bold mt-[10px] ">
              {props.bigText}
            </div>
            <div className="text-[11px] text-center font-medium  ">
              {props.smallText}
            </div>
            <div className="flex text-[12px] small:text-[8px] justify-between font-bold mt-[8px] ">
              <div>⭐⭐⭐</div>
              <div>{props.price}</div>
            </div>
            <div className="flex justify-center items-center mt-[15px] w-[100px] text-[13px] gap-1 bg-[blue] h-[35px] text-white rounded p-1 ">
              <button type="button">Cart</button>
              <TiShoppingCart />
            </div>
          </div>
        ))}
        {/*end card */}
      </div>
    </div>

      <div className="text-[15px] font-semibold mt-[35px] ">Featured Products</div>

      <div className="w-full grid grid-cols-4 gap-10 small:grid-cols-2 mobile:grid-cols-2 ">
        {/* card */}
        {state?.map((props: any) => (
          <div className="h-[250px] small:gap-2 small:h-[300px] bg-white rounded mt-[20px] flex justify-center flex-col items-center p-2 ">
            <img
              className="w-[50%] h-[30%] object-cover "
              src={ing}
              alt={ing}
            />
            <div className="text-[13px] font-bold mt-[10px] ">
              {props.bigText}
            </div>
            <div className="text-[11px] text-center font-medium  ">
              {props.smallText}
            </div>
            <div className="flex text-[12px] small:text-[8px] justify-between font-bold mt-[8px] ">
              <div>⭐⭐⭐⭐⭐</div>
              <div>{props.price}</div>
            </div>
            <div className="flex justify-center items-center mt-[15px] w-[100px] text-[13px] gap-1 bg-[blue] h-[35px] text-white rounded p-1 ">
              <button type="button">Cart</button>
              <TiShoppingCart />
            </div>
          </div>
        ))}
        {/*end card */}
      </div>
    </div>
  );
};

export default GridCard;
