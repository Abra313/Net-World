import{Route} from "react-router-dom"
import NotiSetting from "./notification-setting";


const Route1 = () => {
    return ( 
        <div>
           
                <Route path="/noti" element={<NotiSetting/>}/>
                {/* <Route path="/notification" element={<Notification/>}/>
                <Route path="/message" element={<Message/>}/>
                <Route path="/bookmark" element={<Bookmark/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/group" element={<Group/>}/>
                <Route path="/add" element={<AddCard/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/more" element={<More/>}/>
                {/* <Route path="/noti" element={<NotiSetting/>}/> */}
                


                
         
           
        </div> 
     );
}
 
export default Route1;