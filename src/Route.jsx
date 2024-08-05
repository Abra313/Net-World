import{BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Auth/loginPage";
import SignUp from "./Auth/signUpPage";
import LostPassword from './Auth/LostPassword'
import UserPage from "./pages/userPage/userPage";

const AppRoute = () => {
    return ( 
        <div>
           <BrowserRouter>
            <Routes>
            <Route path='/' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/lost' element={<LostPassword/>}></Route>
            

            <Route path='/user/*' element={<UserPage/>}></Route>


            </Routes>
           </BrowserRouter>
        </div> 
     );
}
 
export default AppRoute;