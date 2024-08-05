import{Routes,Route} from "react-router-dom"
import MainPage from "./Home";
import Notification from "./Notication";
import Message from "./message";
import Bookmark from "./bookmark";
import List from "./lists";
import Group from "./Group";
import AddCard from "./AddCard";
import Profile from "./Profile";
import More from "./More";



const MainRoute = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/notification" element={<Notification/>}/>
                <Route path="/message" element={<Message/>}/>
                <Route path="/bookmark" element={<Bookmark/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/group" element={<Group/>}/>
                <Route path="/add" element={<AddCard/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/more" element={<More/>}/>
                
            </Routes>
            
           
        </div> 
     );
}
 
export default MainRoute;