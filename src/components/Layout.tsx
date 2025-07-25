import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Programme from "./Programme";

const Layout = () => {
  return (
   <>
    <Header />
    
      <main className="container mx-auto px-4 py-8">
        <Outlet />
        <Programme/>
      </main>
      
      <Footer />
   </>
  );
};

export default Layout;