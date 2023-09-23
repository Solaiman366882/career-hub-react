import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div className=" p-20 bg-rose-400 min-h-screen w-full">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;