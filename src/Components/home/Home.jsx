import { Outlet, useNavigation } from "react-router-dom";
import NavSection from "../NavSection/NavSection";
import Footer from "../footer/Footer";
import Loader from "../LoaderSpinar/Loader";

const Home = () => {
  const navigation = useNavigation();
  return (
    <section className="bg-[#3c2a17e0] ">
      <section className="max-w-screen-xl mx-auto ">
        <div className="bg-[#23180d]">
          <NavSection></NavSection>
        </div>
        {/* loader div  , outlet  */}
       
        <div>
          {navigation.state === "loading" ? (
            <div className="flex justify-center items-center">
              <Loader></Loader>
            </div>
          ) : (
            <div className="text-white min-h-screen">
              <Outlet></Outlet>
            </div>
          )}
        </div>
        {/* <div className="text-white min-h-screen">
          <Outlet></Outlet>
        </div> */}
        <div className="mt-10">
          <Footer></Footer>
        </div>
      </section>
    </section>
  );
};

export default Home;
