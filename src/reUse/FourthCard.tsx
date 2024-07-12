import tomato from "../assets/tomato.jpeg"
import img from "../assets/okra at the Farmers Market.jpeg"
import img1 from "../assets/rice.jpeg"
import img2 from "../assets/Premium Photo _ Shopping bag with cart symbol and wheels.jpeg"
import img3 from "../assets/2ccb5a50-09ff-4b46-9605-77264ef9c550.jpeg"
import img4 from "../assets/measure.jpg"
import img5 from "../assets/How To Be A Productive On-Line Shopper_ 7 Tips.jpeg"
import img6 from "../assets/If You're Trying to Lose Weight, You Should Probably Stay Away From These Fruits.jpeg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FourthCard = () => {

    const data = [
        {
            image:`${tomato}`,
            tittle:"Tomato Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img}`,
            tittle:"Okro Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img1}`,
            tittle:"Rice Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img2}`,
            tittle:"Pineapple Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img3}`,
            tittle:"Coconut Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img4}`,
            tittle:"plantain Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img5}`,
            tittle:"Pepper Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img6}`,
            tittle:"Okro Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img}`,
            tittle:"Rice Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img3}`,
            tittle:"Pineapple Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img4}`,
            tittle:"Coconut Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img5}`,
            tittle:"Pepper Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img6}`,
            tittle:"Tomato Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${tomato}`,
            tittle:"Okro Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img}`,
            tittle:"Rice Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img1}`,
            tittle:"Pineapple Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img2}`,
            tittle:"Coconut Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img4}`,
            tittle:"Pepper Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img3}`,
            tittle:"Ugwu Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img5}`,
            tittle:"BitterLeaf Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${img6}`,
            tittle:"Onion Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:`${tomato}`,
            tittle:"WaterLeaf Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Tomato Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Okro Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Rice Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Pineapple Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Coconut Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Pepper Store",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Ugwu Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"BitterLeaf Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"Onion Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
        {
            image:"",
            tittle:"WaterLeaf Store",
            text:"Shop Now ipsum dolor sit amet consectetur adipisicing elit. Eos ab atque itaque?",
            butt:"Shop Now."
        },
    ]
    const  settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        responsive:[
            {
                breakPoint:320,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 5000,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows:false,
                    autoplay:true,
                    autoplaySpeed:1000,
                }
            },
        ]
      }

  return (
    <div className="w-[100%] ">
        <div className="  mt-[30px] w-[100%] gap-20 ">
        <Slider {...settings}>
       <div className="h-[300px] overflow-hidden p-[10px] rounded bg-[#504f4f] w-[250px] small:text-[15px] ml-[20px] mr-[20px] small:w-[250px] ">
              <div className="flex justify-center gap-2 ">
                <div className="text-[#18fb18a9] font-semibold text-[20px] ">Recent</div>
                <div className="text-[white] font-semibold text-[20px] ">Project</div>
              </div>
              <div className="w-[100%] text-[13px] font-medium text-[white] mt-[20px] text-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ea ullam ab. Doloribus maxime ad dolore accusamus illum eos eligendi porro corporis omnis reprehenderit, ea sint officiis beatae minima magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit velit. </div>
                <div className="p-2 text-[14px] h-[40px] rounded hover:scale-[1.05] text-white transition-all duration-700 bg-[#18fb18a9] hover:cursor-pointer text-center mt-[30px] font-medium ">
                    <button>Lorem.</button>
                </div>
            </div>
          
           {
                data?.map((props:any)=>(
                    <div className="h-[300px] mr-[50px] overflow-hidden rounded w-[250px]   ">
                <img
                className="h-[50%] w-[100%] "
                 src={props?.image} alt={tomato} />
                  <div className=" text-[15px] text-[#504f4f] font-semibold mt-[15px] ">{props?.tittle}</div>
            <div className="font-[meium] w-[100%] mt-[20px] text-[#5d5c5c] text-[13px] ">{props?.text}</div>
            <div className="p-2 text-[14px] h-[40px] rounded hover:scale-[1.05] text-white transition-all duration-700 bg-[#18fb18a9] text-center mt-[20px] font-medium hover:cursor-pointer ">
                    <button>{props?.butt}</button>
                </div>
            </div>
                ))
            }
           </Slider>
        </div>
    </div>
  )
}

export default FourthCard