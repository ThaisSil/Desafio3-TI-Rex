import { Link } from "react-router-dom";


export default function Navbar() {

  
  return (
    
      <div className="flex flex-row space-x-20">
   
        <Link to={"/"}>Home</Link>
     
        <Link to={"/Shop"}>Shop</Link>
        
        <Link to={""}>About</Link>

        <Link to={"/Contact"}>Contact</Link>
        
      </div>
        )}

