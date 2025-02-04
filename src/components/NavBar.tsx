import { Link } from "react-router-dom";


export default function Navbar() {

  
  return (
    
      <div className="flex flex-row space-x-[75px] mr-[320px]">
   
        <Link to={"/"}>Home</Link>
     
        <Link to={"/Shop"}>Shop</Link>
        
        <p>About</p>

        <Link to={"/Contact"}>Contact</Link>
        
      </div>
        )}

