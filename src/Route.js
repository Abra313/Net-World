import{BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./Component/Footer-pages/About"
import Login from "./Auth/loginPage";
import UserPage from "./pages/userPage/userPage";
const AppRoute = () => {
    return ( 
        <div>
           <BrowserRouter>
            <Routes>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/user' element={<UserPage/>}></Route>


            </Routes>
           </BrowserRouter>
        </div> 
     );
}
 
export default AppRoute;