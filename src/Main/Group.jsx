

import Button from "../Component/Button";
import Kelly from '../asset/images/kelly.jpg';
import { HiUserGroup } from "react-icons/hi2";
import post1 from '../asset/images/post1.jpg'
import post2 from '../asset/images/post2.jpg'
import post3 from '../asset/images/post3.jpg'
import { IoIosCreate } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Group = () => {
    const navigate = useNavigate();
    

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };
    return(
        <div className="">
            <div className=" m-[10px] h-[100vh] max-sm:mt-[20%]">
               <div className="wrapper">
                    <div className="flex justify-between items-center ">
                    <FaArrowLeft 
                            className="text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px] cursor-pointer max-sm:hidden" 
                            onClick={handleBackClick} 
                        />
                        <h2 className='text-primary font-bold mt-[2%] text-[1.5rem] ml-[10px] flex items-center gap-[10px]'>  Groups  </h2>
                        <IoIosCreate className="hidden max-sm:block text-[1.5rem] outline-white"/>
                        <Button className="bg-primary rounded-[%] mt-[2%] flex items-center gap-[10px] max-sm:hidden">
                            <IoIosCreate className="max-sm:block"/>
                            Create Groups
                        </Button>
                    </div>
                    <hr  className="mt-[3%] max-sm:hidden"/>



                    <div className="mt-[2%] flex border-[1px] p-[1%] bg-ashLight w-[98%] h-[180px] m-[10px] border-[2px] rounded-[6px] max-sm:mt-[10%] max-sm:w-[95%] max-sm:h-[100px]">
                                <div className="flex items-center gap-[5px]">
                                    <img src={Kelly} alt="kelly" className="rounded-[50%] w-[100px] h-[100px] " />
                                </div>

                                <div className=" w-[99%] flex flex-col gap-[20px] ml-[2%]">
                                    <div className="flex items-center gap-[400px]">
                                        <div className='flex flex-col gap-[10px]'>
                                            <h1  className="text-primary font-bold max-sm:w-[500px]">Coocking Group</h1>
                                            <div className=" flex items-center gap-[10px]"> 
                                            <HiUserGroup className="w-[30px] h-[30px] text-primary"/>
                                            <div className="flex">
                                                <img src={post1} alt="" className="w-[30px] h-[30px] rounded-[50%] " />
                                                <img src={post2} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <img src={post3} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <img src={Kelly} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <div className="w-[30px] h-[30px] rounded-[50%] border-[1px] flex justify-center items-center bg-white ml-[-10px]">
                                                    <p className="text-[0.7rem]">+99</p>
                                                </div>
                                                <p className="ml-[10px]">10+ posts a day</p>
                                            </div>

                                        </div>

                                    </div>
                                        <Button
                                        children="Join"
                                        className="w-[140px] h-[50px] bg-primary"
                                        />
                                </div>
                                    <p className="w-[95%] max-sm:w-[70%] h-[50vh] border-[2px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, tenetur optio accusantium reiciendis maiores aut, impedit tempora repellendus est quidem reprehenderit, odit similique quos. Architecto porro quasi, asperiores vitae rerum ullam voluptate ipsum ratione? .</p>

                            </div>
                                
                         </div>




                         

                    <div className="mt-[2%] flex border-[1px] p-[1%] bg-ashLight w-[98%] h-[180px] m-[10px] border-[2px] rounded-[6px]">
                                <div className="flex items-center gap-[5px]">
                                    <img src={post2} alt="kelly" className="rounded-[50%] w-[100px] h-[100px] " />
                                </div>

                                <div className=" w-[99%] flex flex-col gap-[20px] ml-[2%] max-sm:w-full border-[2px]">
                                    <div className="flex items-center gap-[400px]">
                                        <div className='flex flex-col gap-[10px]'>
                                            <h1  className="text-primary font-bold">Hack the box Group</h1>
                                            <div className=" flex items-center gap-[10px]"> 
                                            <HiUserGroup className="w-[30px] h-[30px] text-primary"/>
                                            <div className="flex">
                                                <img src={post1} alt="" className="w-[30px] h-[30px] rounded-[50%] " />
                                                <img src={post2} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <img src={post3} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <img src={Kelly} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <div className="w-[30px] h-[30px] rounded-[50%] border-[1px] flex justify-center items-center bg-white ml-[-10px]">
                                                    <p className="text-[0.7rem]">+99</p>
                                                </div>
                                                <p className="ml-[10px]">10+ posts a day</p>
                                            </div>

                                        </div>

                                    </div>
                                        <Button
                                        children="Join"
                                        className="w-[140px] h-[50px] bg-primary"
                                        />
                                </div>
                                    <p className="w-[95%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, tenetur optio accusantium reiciendis maiores aut, impedit tempora repellendus est quidem reprehenderit, odit similique quos. Architecto porro quasi, asperiores vitae rerum ullam voluptate ipsum ratione? .</p>

                            </div>
                                
                         </div>


                         

                    <div className="mt-[2%] flex border-[1px] p-[1%] bg-ashLight w-[98%] h-[180px] m-[10px] border-[2px] rounded-[6px]">
                                <div className="flex items-center gap-[5px]">
                                    <img src={post1} alt="kelly" className="rounded-[50%] w-[100px] h-[100px] " />
                                </div>

                                <div className=" w-[99%] flex flex-col gap-[20px] ml-[2%]">
                                    <div className="flex items-center gap-[400px]">
                                        <div className='flex flex-col gap-[10px]'>
                                            <h1  className="text-primary font-bold">Graphics designer Group</h1>
                                            <div className=" flex items-center gap-[10px]"> 
                                            <HiUserGroup className="w-[30px] h-[30px] text-primary"/>
                                            <div className="flex">
                                                <img src={post1} alt="" className="w-[30px] h-[30px] rounded-[50%] " />
                                                <img src={post2} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <img src={post3} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <img src={Kelly} alt="" className="w-[30px] h-[30px] rounded-[50%] ml-[-10px] " />
                                                <div className="w-[30px] h-[30px] rounded-[50%] border-[1px] flex justify-center items-center bg-white ml-[-10px]">
                                                    <p className="text-[0.7rem]">+99</p>
                                                </div>
                                                <p className="ml-[10px]">10+ posts a day</p>
                                            </div>

                                        </div>

                                    </div>
                                        <Button
                                        children="Join"
                                        className="w-[140px] h-[50px] bg-primary"
                                        />
                                </div>
                                    <p className="w-[95%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, tenetur optio accusantium reiciendis maiores aut, impedit tempora repellendus est quidem reprehenderit, odit similique quos. Architecto porro quasi, asperiores vitae rerum ullam voluptate ipsum ratione? .</p>

                            </div>
                                
                         </div>



                         
                    </div>

            </div>
            
        </div>
    )
}
export default Group
