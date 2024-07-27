import MainRoute from "./Route"
import post1 from '../asset/images/post1.jpg'
import post2 from '../asset/images/post2.jpg'
import post3 from '../asset/images/post3.jpg'
import post4 from '../asset/images/post4.jpg'
import post5 from '../asset/images/post5.jpg'
const MainPage = () =>{
    return(
        <div className="border-l-[2px] border-r-[2px] mt-[4.4%] ml-[18%]">
        <div className="flex gap-[5px] w-[61.4%] bg-white m-[10px] fixed" >
            <div className="flex flex-col justify-center items-center border-[2px] w-[160px] h-[180px] bg-secondary rounded-[10px] mt-[10px]">
                <h1 className="text-[2rem] font-bold text-white ">+</h1>
                <h2 className="text-white text-center text-[1.2rem] font-bold">Add <br />Story</h2>
            </div>
            <div className="flex justify-center items-center border-[2px] w-[160px] h-[180px] rounded-[10px] mt-[10px]">
                <img src={post1} alt="post1" className="w-[160px] h-[180px] rounded-[10px] " />
            </div>
            <div className="flex justify-center items-center border-[2px] w-[160px] h-[180px] rounded-[10px] mt-[10px]">
                <img src={post2} alt="post2" className="w-[160px] h-[180px] rounded-[10px] " />
            </div>
            <div className="flex justify-center items-center border-[2px] w-[160px] h-[180px] rounded-[10px] mt-[10px]">
                <img src={post3} alt="post3" className="w-[160px] h-[180px] rounded-[10px] " />
            </div>
            <div className="flex justify-center items-center border-[2px] w-[160px] h-[180px] rounded-[10px] mt-[10px]">
            <img src={post4} alt="post4" className="w-[160px] h-[180px] rounded-[10px] " />
            </div>
            <div className="flex justify-center items-center border-[2px] w-[160px] h-[180px] rounded-[10px] mt-[10px]">
            <img src={post5} alt="post5" className="w-[160px] h-[180px] rounded-[10px] " />
            </div>
        </div>



        <MainRoute/>
        
        </div>
    )
 }
 export default MainPage