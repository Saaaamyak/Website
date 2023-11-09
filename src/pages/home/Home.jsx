import Posts from "../../components/posts/Posts";
//import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import Header from "../../components/header/Header";
//import TopBar from "../../components/topbar/TopBar";

export default function Home() {
  return (
    <>
      
       <Header />
       <div className="home">
        
        <Posts />
        


    </div>

    </>
  )
}
