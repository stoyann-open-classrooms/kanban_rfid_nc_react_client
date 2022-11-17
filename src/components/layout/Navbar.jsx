import { BsKanbanFill } from "react-icons/fa";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

function Navbar() {
  return (
    <div className="navbar mb-5 shadow-lg bg-neutral px-3">
       <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
        <li><Link to={"/"}>Accueil</Link></li>
        <li><Link to={"/kanbans"}>kanbans</Link></li>
        <li><Link to={"/products"}>produits</Link></li>
        <li><Link to={"/orders"}>Commandes</Link></li>
        <li><Link to={"/requests"}>Demandes</Link></li>
        
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to={'/'} className="cursor-pointer normal-case text-sm">Kanban NC</Link>
  </div>
  <div className="navbar-end px-6  ">

    
    <div className="indicator">
  <span className="indicator-item badge badge-secondary bg-red-600">3</span> 
  <Link to={'/requests'}>
  <button className="btn btn-sm bg-slate-600">A traiter</button>
  </Link>
</div>
    
  </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Application Kanban NC",
};

Navbar.propTypes = {
  title: propTypes.string,
};
export default Navbar;
