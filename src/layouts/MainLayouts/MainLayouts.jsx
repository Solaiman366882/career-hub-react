import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


const MainLayouts = () => {
    return (
        <div className="flex flex-col justify-between bg-rose-400 min-h-screen w-full">
            <main className=" max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;