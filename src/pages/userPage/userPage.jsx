import Rightaside from "../../Component/Rightaside";
import Footer from "../../Component/Footer";
import Header from "../../Component/header";
import Aside from "../../Component/aside";
import MainPage from "../../Main/main";


function UserPage() {
  

  return (
    <div className="app">
      <Header/>
      <div className="flex justify-between w-[100%] ">
      <Aside/>
      <MainPage/>
      <Rightaside/>  
      </div>  

      
      <Footer/>
      
  
    </div>
  
  );
}

export default UserPage;
