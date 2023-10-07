import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen">
                <h2 className="text-[300px] font-black text-center">404</h2>
                <h2 className="text-6xl font-bebas text-center -mt-20">page not found</h2>
                <h3 className="text-2xl font-semibold text-center">Go <span className="text-green-400 underline"><Link to='/'>Home</Link></span></h3>
            </div>
        </div>
    );
};

export default Error;