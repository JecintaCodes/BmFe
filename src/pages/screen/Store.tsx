import { Link } from "react-router-dom";
import ing from "../../assets/10 fruits qui font grossir.jpeg"
// import DetailProductScreen from "./DetailProductScreen";
import img from "../../assets/plantain.jpg"
// import flower from "@formkit/auto-animate"

const Store = () => {

    const state = [
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecintai@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinti.com",
            email:"onyemaobijecinti@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
        {
            image:`${ing}`,
            image1:`${img}`,
            url:"https://onyemaobijecinta.com",
            email:"onyemaobijecinta@gmail.com",
            name:"Onyemaobi Jecinta"
        },
    ]
  return (
    <div>
        <h1 className="ml-[60px] font-semibold text-[20px]  mt-[30px] ">General Market</h1>
      <div className="flex mt-[30px] justify-center flex-wrap">
           
            {
                state?.map((props:any)=>(
                    <div
              className="w-[220px] small:w-[40%] mobile:w-[45%]  overflow-hidden h-[265px] m-2 flex justify-center gap-[20px] items-center  rounded-[7px] flex-col  "
            >
              <Link
              className="w-[100%]"
              to="/product">
                <img
                  className="w-[100%] h-[200px] object-cover hover:cursor-pointer hover:scale-[1.05] duration-700 transition-all"
                  src={props?.image}
                />
              </Link>

              <div className="w-[100%] h-[100px] mt-[-15px] ">
                <div className="flex justify-bettween gap-[5px] items-center">
                  <img
                  className="w-[50px] h-[40px] rounded-[50%] hover:cursor-pointer hover:scale-[1.05] duration-700 transition-all   "
                  src={img} alt={img} />
                  <div className="text-[12px] ">
                    <div className="text-[12px] font-bold ">{props?.name}</div>
                    <div className="text-[12px] font-bold ">{props?.email}</div>
                    <div className="text-[12px] font-bold ">_{props?.url}</div>
                  </div>
                </div>
              </div>
              </div>
                ))
            }
         
           
         
      </div>
    </div>
  );
};

export default Store;
