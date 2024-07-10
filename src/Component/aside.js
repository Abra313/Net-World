import pp from '../asset/images/4.jpg'
import Button from './Button';
import { ImHome } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BiSolidBookmarks } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { CiCircleMore } from "react-icons/ci";
const Aside = () => {
    const handleClick = () => {
       alert('Button clicked!');
      }
    return ( 
        <>
        <div className='w-[18%] h-[100vh] border-r-[1px]  flex justify-center '>
            <div className='flex justify-center flex-col items-start space-y-10'>
                <img src={pp} alt="pp" className='w-[40px] h-[40px] rounded-[50%]'></img>
                <div className='flex justify-center items-center space-x-3'><ImHome /><CustomLink href="/home" >Home</CustomLink></div>
                <div className='flex justify-center items-center space-x-3'>< IoMdNotifications /><CustomLink href="/notification" >Notifcation</CustomLink></div>
                <div  className='flex justify-center items-center space-x-3'><BiSolidMessageRoundedDetail/><CustomLink href="/message" >Message</CustomLink></div>
                <div className='flex justify-center items-center space-x-3'><BiSolidBookmarks/><CustomLink href="/books" >Booksmark</CustomLink></div>
                <div className='flex justify-center items-center space-x-3'> <IoListSharp /> <CustomLink href="/lists">Lists</CustomLink></div>
                <div className='flex justify-center items-center space-x-3'><MdGroups2/><CustomLink href="/group">Group</CustomLink></div>
                <div className='flex justify-center items-center space-x-3'> <MdAddCard/><CustomLink href="/add">Add Card</CustomLink></div>
                <div className='flex justify-center items-center space-x-3'>  <ImProfile/> <CustomLink href="/profile">Profile</CustomLink></div>
                <div className='flex justify-center items-center space-x-3'>  <CiCircleMore/><CustomLink href="/more" >More</CustomLink></div>
        
                <Button onClick={handleClick}>+ New post</Button>
            </div>


        </div>
        
        
        
        
        
        </>
     );
}
function CustomLink({ href,children,...props}){
    
    return(
        <li >
            <a href={href}>{children}</a></li>

    )

}
 
export default Aside ;