import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import post4 from '../asset/images/post4.jpg';
import Glory from '../asset/images/glory.jpg';
import Kelly from '../asset/images/kelly.jpg';
import Recheal from '../asset/images/recheal.jpg';
import Pual from '../asset/images/paul.jpg';
import post1 from '../asset/images/post1.jpg';
import post2 from '../asset/images/post2.jpg';
import post3 from '../asset/images/post3.jpg'; 
import Igbo from '../asset/images/igbo.jpg';
import Pre from '../asset/images/pre.jpg';
import post5 from '../asset/images/post5.jpg';


const Message = () =>{
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return(
        <div className="border-[1px] h-[100vh] mt-[5px]">
            <div className="mt-[10px] m-[10px]">
                <div className="wrapper">
                    <div className="flex  gap-[45%] items-center">
                            <FaArrowLeft 
                                className="text-primary font-bold mt-[1%] text-[1.5rem]  cursor-pointer" 
                                onClick={handleBackClick} 
                            />
                            <h2 className='text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px]'>
                                Messages
                            </h2>
                            
                    </div>

                    <div className=""><h1 className="text-[1rem] font-bold text-primary">Chats</h1></div>
                    <div className=' ml-[2.5%] mt-[2%] overflow-x-auto border[2px] w-[95%] h-[10vh] flex justify-center items-center gap-[10px]'>
                       
                        <img src={post2} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={post3} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={post4} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={Kelly} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Glory} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Pual} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={Pre} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Igbo} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={post5} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                       
                        <img src={post1} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={post2} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={post3} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={post4} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={Pre} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Igbo} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={post5} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Kelly} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Glory} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Pual} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={Pre} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Igbo} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={post5} alt="" className='w-[70px] h-[50px] rounded-[50%]' />

                        <img src={post4} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={Pre} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Igbo} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={post5} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Kelly} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Glory} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Pual} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>

                        <img src={post4} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={Kelly} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Glory} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Pual} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                        <img src={Pre} alt="" className='w-[70px] h-[50px] rounded-[50%]' />
                        <img src={Igbo} alt=""  className='w-[70px] h-[50px] rounded-[50%]'/>
                    </div>


                    <div className=' ml-[2.5%] mt-[2%] overflow-y-auto flex-col border[2px] h-[50vh] h-[65vh] flex justify-start gap-[10px]'>
                       
                        <div className='flex justify-start gap-[10px]'>
                             <img src={post2} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Dorothy</h3>
                                <p className="text-ashDark">Hi....how far are you coming to Babtech today</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                             <img src={post3} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Tracy Vicky</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>


                        <div className='flex justify-start gap-[10px]'>
                              <img src={post4} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Bukunmi</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>


                        <div className='flex justify-start gap-[10px]'>
                             <img src={Kelly} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Godwin Dickson</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                             <img src={Glory} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Ceeprintz Peace</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                             <img src={Pual} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>JAy Storm</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                            <img src={Pre} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Success</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                            <img src={Igbo} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Favour uch</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                            <img src={post5} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Abiodun Kehinde</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                            <img src={post1} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Sarah Williams</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                            <img src={post2} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Alex Smith</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                             <img src={post3} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Johnson Joy</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>
                        <div className='flex justify-start gap-[10px]'>
                             <img src={post4} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Johnson Delight</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                            <img src={Pre} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Amazing Grace</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              <img src={Igbo} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>John Grace</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>


                        <div className='flex justify-start gap-[10px]'>
                             <img src={post5} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Vicent Grace</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              <img src={Kelly} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Chitech</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              <img src={Glory} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Ololaide</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              <img src={Glory} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Olaide John</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              <img src={Pre} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Rosemary</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              <img src={Igbo} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Mary Vicent</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              <img src={post5} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Mary Johnson</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              <img src={post4} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Ann Johnson</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={Pre} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>MaryAnn</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={Igbo} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Smith Ann</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={post5} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Ann Ann</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                              <img src={Kelly} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Kaleed Mohammed</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>
                        <div className='flex justify-start gap-[10px]'>
                              
                             <img src={Glory} alt="" className='w-[50px] h-[50px] rounded-[50%]' /> 
                             <div>
                                <h3 className='text-secondary font-bold'>Mercy Williams</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>
                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={Pual} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Johnson Williams</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={post4} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>
                             <div>
                                <h3 className='text-secondary font-bold'>Johnson Gold</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                             <img src={Kelly} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Kelly Vicent</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={Glory} alt="" className='w-[50px] h-[50px] rounded-[50%]' />
                             <div>
                                <h3 className='text-secondary font-bold'>Glory Vicent</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={Pual} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>   
                             <div>
                                <h3 className='text-secondary font-bold'>Paul Smith</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>

                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={Pre} alt="" className='w-[50px] h-[50px] rounded-[50%]' />   
                             <div>
                                <h3 className='text-secondary font-bold'>Paul Williams</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>
                        <div className='flex justify-start gap-[10px]'>
                              
                            <img src={Igbo} alt=""  className='w-[50px] h-[50px] rounded-[50%]'/>  
                             <div>
                                <h3 className='text-secondary font-bold'>Mary Williams</h3>
                                <p className="text-ashDark">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laboriosam.</p>
                             </div>
                             

                        </div>
 
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Message