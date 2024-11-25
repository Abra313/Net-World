import { CiSearch } from "react-icons/ci";
import post1 from '../asset/images/post1.jpg'
import post2 from '../asset/images/post2.jpg'
import post3 from '../asset/images/post3.jpg'
const Rightaside = () => {
    

    return ( 
        <div className="w-[18%] h-[100vh] border-l-[0]  flex flex-col p-[10px] h-[50vh] mt-[3.5%] fixed ml-[82%] max-sm:hidden ">
            <div className="flex border-[1px] h-[51px] w-[302] rounded-[4px] mt-[30px] items-center p-[10px] space-x-[4px] ">
            <CiSearch /><input type="text" placeholder="Search"  className=" outline-none border-0"/>
            </div>
           <div className="mt-[10%] overflow-y-auto  h-[50vh]">
           <div className="flex justify-between mt-[30px] mr-[1.6%]">
                
                <h2 className="font-bold text-ashDark">Suggestions</h2>
                <p>See All</p>
            </div>
            <div className=" flex flex-col gap-[20px] m-[10px]">
                <div className="border-[1px] w-[302] h-[150px] rounded-[5px] flex flex-col justify-center">

                    <div className="ml-[20px]">
                        
                        <img src={post1} alt="post1" className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-[3px]" />

                        <h3 className="font-bold text-[12px]">Abraham Olaoluwa</h3>
                        <p className="text-[12px]">@AbrahamOlaoluwa</p>
                    </div>

                </div>

                <div className="border-[1px] w-[302] h-[150px] rounded-[5px] flex flex-col justify-center" >
                    <div className="ml-[20px]">
                        <img src={post2} alt="post2" className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-[3px]" />
                        <h3 className="font-bold text-[12px]">Abraham Taiwo</h3>
                        <p className="text-[12px]">@AbrahamTaiwo</p>
                    </div>

                </div>

                <div className="border-[1px] w-[302] h-[150px] rounded-[5px] flex flex-col justify-center" >
                    <div className="ml-[20px]">
                        <img src={post3} alt="post3" className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-[3px]" />   
                        <h3 className="font-bold text-[12px]">Abraham Kehinde</h3>
                        <p className="text-[12px]">@Abrahamkehinde</p>
                    </div>

                </div>
                
                

            </div>
           </div>
        </div>
     );
}
 
export default Rightaside;