import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-[#F2EDEA]">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;