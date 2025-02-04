import Image from '../assets/images/MainImage.png';

const MainSection = () => {
  return (
    <div  className="flex flex-col justify-between items-center bg-cover bg-center lg:flex-row md:h-[644px]"
    style={{ backgroundImage: `url(${Image})` }}>
        <div className='w-[643px] h-[443px] bg-[#FFF3E3] border-2 rounded-[10px]'>

        </div>
    </div>
  )
}

export default MainSection
