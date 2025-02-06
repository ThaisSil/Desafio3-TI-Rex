
import Dining from '../../../assets/images/Dining.png';
import Living from '../../../assets/images/Living.png';
import Bedroom from '../../../assets/images/Bedroom.png';


const BrowseSection = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20 px-32'>
        <p className='text-[#333333] font-bold text-[32px] '>Browse The Range</p>
        <p className='text-[#666666] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='flex flex-row justify-between gap-5 py-16 mx-32'>
        <div>
            <img src={Dining} alt="dining" />
            <p className='font-semibold text-2xl text-center text-[#333333] p-7'>Dining</p>
        </div>
        <div>
            <img src={Living} alt="living" />
            <p className='font-semibold text-2xl text-center text-[#333333] p-7'>Living</p>
        </div>
        <div>
            <img src={Bedroom} alt="bedroom" />
            <p className='font-semibold text-2xl text-center text-[#333333] p-7'>Bedroom</p>
        </div>
        </div>
      
    </div>
  )
}

export default BrowseSection
