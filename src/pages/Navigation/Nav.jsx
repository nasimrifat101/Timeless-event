import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthPrivider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#42ea5b] underline" : ""
          }
          to="/"
        >
          <span className="font-young">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#42ea5b] underline" : ""
          }
          to="/services"
        >
          <span className="font-young">Services</span>
        </NavLink>
      </li>
     {
      user &&  <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#42ea5b] underline" : ""
        }
        to="/dashboard"
      >
        <span className="font-young">Dashboard</span>
      </NavLink>
    </li>
     }
       {
      user &&  <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#42ea5b] underline" : ""
        }
        to="/brainstorm"
      >
        <span className="font-young">Brainstorm</span>
      </NavLink>
    </li>
     }
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl lg:text-3xl font-bebas"
          >
            Timeless Events
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-2">
              <p className="text-black hidden md:block">{user.displayName}</p>
              {user.photoURL && (
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.photoURL}
                  alt="User Profile"
                />
              )}
              <p
                onClick={logOut}
                className="btn lg:w-32 bg-gray-700 text-white hover:bg-green-300 hover:text-black font-semibold"
              >
                Log Out
              </p>
            </div>
          ) : (
            <Link to="/login">
              <p className="btn lg:w-32 bg-gray-700 text-white hover:bg-green-300 hover:text-black font-semibold">
                Login
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
