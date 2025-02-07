import Facebook from '../assets/images/Facebook.png';
import Instagram from '../assets/images/Instagram.png';
import Twiter from '../assets/images/Twiter.png';
import Linkedin from '../assets/images/Linkedin.png';





const Footer = () => {
  return (
    <footer className='border-t-2 border-gray-300 mt-12'>
    <div className='container mx-auto px-4 '>
      <div className='flex flex-row py-12'>
        <div className='flex flex-col '>
      <p className="font-bold text-2xl text-black">Furniro.</p>
       <div>
      <p className='text-[#9F9F9F] w-[285px] h-[72px] my-14'>400 University Drive Suite 200 Coral Gables,<br />
      FL 33134 USA</p>
      </div>
      <div className='flex mt-6'>
      <a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook"/></a>
      <a href="https://www.instagram.com/"><img src={Instagram} alt='Instagram'/> </a>
      <a href="https://x.com/"><img src={Twiter} alt="Twitter" /></a> 
      <a href="https://www.linkedin.com/"><img src={Linkedin} alt="Linkedin" /></a>
              
        </div>
      </div>

      <div className='flex flex-row justify-between ml-36'>
        
       <div className='text-[#9F9F9F] font-medium'>Links
            <div className='text-black py-11'>Home</div>
            <div className='text-black'>Shop</div>
            <div className='text-black py-11'>About</div>
            <div className='text-black py11'>Contact</div>
        </div>
        <div className='px-32'>
        <p className='text-[#9F9F9F] font-medium'>Help</p>
        <div>
            <div className='text-black py-11'>Payment Options</div>
            <div className='text-black'>Returns</div>
            <div className='text-black py-11'>Privacy Police</div>
        </div>
        </div>
        <div>
            <p className='text-[#9F9F9F] font-medium'>Newsletter</p>
            <div className='flex items-center space-x-2 mt-9 '>
            <input type="email" placeholder='Enter Your Email Address' className=" text-sm border-b-2 border-black w-[200px]"/>
            <button className=" text-black border-b-2 border-black text-sm font-medium w-[75px]">SUBSCRIBE</button>
        </div>
        </div>
        </div>
      </div>
      </div>
    
      <div className="border-t border-[#D9D9D9] mt-8 h-[59px] mb-10 mr-48 "> 
        <p>&copy; 2023 furina. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
