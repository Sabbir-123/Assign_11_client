import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import logo from "../../Assets/logo.png";
import { AuthContext } from "../../Constexts/AuthpProvider";
import useAdmin from "../../Routes/UseAdmin";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] =useAdmin(user?.email)
  const handleLogout = () => {
    logout()
      .then(swal("User Logged Out"))
      .catch((error) => swal(error.message));
  };

  const menuItems = (
    <>
      <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl">
        <Link to="/">Home</Link>
      </li>
      {user?.email ? (
        <>
          <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl">
            <Link to="/addservices">Add Services</Link>
          </li>
          {
            isAdmin ? <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl">
            <Link to="/allreviews">All Reviews</Link>
          </li> 
            :
              <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl">
            <Link to="/myallreviews">View Reviews</Link>
          </li>
          }
         
          <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl" onClick={handleLogout}>
            <Link>Log Out</Link>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl">
            <Link to="/register">Register</Link>
          </li>
          <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl">
            <Link to="/login">Login</Link>
          </li>
         
        </>

      )}

      {/* <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl">
        <Link to="/blogs">Blogs</Link>
      </li> */}
      <li className="font-semibold hover:bg-cyan-400 hover:text-black hover:rounded-xl">
        <Link to="/contacts">Contacts</Link>
      </li>
      
    </>
  );
  return (
    <div className="navbar pt-2 pb-4 purple textColor">
      <div className="navbar-start ">
        <div className="dropdown ">
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
            className="menu purple menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-12 h-10 rounded" src={logo} alt="" />
          <h1 className="px-1"> Service Critic</h1>
        </Link>
      </div>
      <div className="navbar-end ">
        <ul className="menu  menu-horizontal hidden lg:flex p-0">{menuItems}</ul>
        <ul>
          <li>
            <img src={user?.photoURL} className="rounded h-12 image ml-6" alt="" />
            <p>{user?.displayName}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
