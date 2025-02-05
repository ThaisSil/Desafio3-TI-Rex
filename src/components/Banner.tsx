
//import BgBanner from '../assets/images/BgBanner.png';
import Logo from '../assets/images/Logo.png';


interface BannerProps {
  bgImage: string;
  title: string;
  subtitle: string;
  paragraph: string;
}

const Banner: React.FC<BannerProps> = ({ bgImage, title, subtitle, paragraph }) => {
  return (
    <div  className="bg-cover bg-center h-[316px]"style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='flex justify-center'>
        <img src={Logo} alt="Logo" className=' mt-20'/>
        </div>
        <div className='text-center '>
        <p className='font-medium text-5xl'>{title}</p>
        <p className='font-medium'>{subtitle} <span className='font-light'>{paragraph}</span></p>
        </div>
      
    </div>
  )
}

export default Banner
