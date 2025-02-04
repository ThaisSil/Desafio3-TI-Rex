import Facebook from '../assets/images/Facebook.png';
import Instagram from '../assets/images/Instagram.png';
import Twiter from '../assets/images/Twiter.png';
import Linkedin from '../assets/images/Linkedin.png';





const Footer = () => {
  return (
    <footer>
    <div className='container mx-auto px-4 '>
      <div className='grid grid-cols-1 my-12 ml-[100px] md:grid-cols-4'>
        <div className='flex flex-col '>
      <p className="font-bold text-2xl text-black">Furniro.</p>
     
      <p className='text-[#9F9F9F] w-full my-14'>400 University Drive Suite 200 Coral Gables,
      FL 33134 USA</p>
      <div className='flex mt-6'>
      <a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook"/></a>
      <a href="https://www.instagram.com/"><img src={Instagram} alt='Instagram'/> </a>
      <a href="https://x.com/"><img src={Twiter} alt="Twitter" /></a> 
      <a href="https://www.linkedin.com/"><img src={Linkedin} alt="Linkedin" /></a>
              
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-12'>
        
       <ul className='text-[#9F9F9F] font-medium px-[144px]'>Links
            <li className='text-black'>Home</li>
            <li className='text-black'>Shop</li>
            <li className='text-black'>About</li>
            <li className='text-black'>Contact</li>
        </ul>
        <div>
        <p className='text-[#9F9F9F] font-medium px-[72px] mb-9'>Help</p>
        <ul>
            <li className='text-black'>Payment Options</li>
            <li className='text-black'>Returns</li>
            <li className='text-black'>Privacy Police</li>
        </ul>
        </div>
        <div>
            <p className='text-[#9F9F9F] font-medium'>Newsletter</p>
            <div className='flex items-center space-x-2 mt-9'>
            <input type="email" placeholder='Enter Your Email Address' className=" text-sm border-b-2 border-black "/>
            <button className=" text-black border-b-2 border-black text-sm font-medium">SUBSCRIBE</button>
        </div>
        </div>
        </div>
      </div>
      </div>
    
      <div className="text-center text-gray-500 mt-8"> 
        <p>&copy; 2023 furina. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
