import Trophy from '../assets/images/trophy 1.png';
import Guarantee from '../assets/images/guarantee.png';
import Shipping from '../assets/images/shipping.png';
import Support from '../assets/images/Support.png';

const Warranty = () => {
  return (
    <div className='bg-[#FAF3EA] py-[100px] '>
      <div className='flex flex-row justify-between mx-[53px]'>
        <div className='text-[#242424] flex flex-row gap-2'>
            <img src={Trophy} alt="Trophy" />
            <div className='flex flex-col gap-[2px]'>
            <p className='font-semibold text-[25px]'>High Quality</p>
            <p className='font-medium text-xl text-[#898989]'>crafted from top materials</p>
        </div>
        </div>
        <div className='text-[#242424] flex flex-row gap-2'>
            <img src={Guarantee} alt="Guarantee" />
            <div className='flex flex-col gap-[2px]'>
            <p className='font-semibold text-[25px]'>Warranty Protection</p>
            <p className='font-medium text-xl text-[#898989]'>Over 2 years</p>
        </div>
        </div>
        <div className='text-[#242424] flex flex-row gap-2'>
            <img src={Shipping} alt="Shipping" />
            <div className='flex flex-col gap-[2px]'>
            <p className='font-semibold text-[25px]'>Free Shipping</p>
            <p className='font-medium text-xl text-[#898989]'>Order over 150 $</p>
        </div>
        </div>
        <div className='text-[#242424] flex flex-row gap-2'>
            <img src={Support} alt="Support" />
            <div className='flex flex-col gap-[2px]'>
            <p className='font-semibold text-[25px]'>24 / 7 Support</p>
            <p className='font-medium text-xl text-[#898989]'>Dedicated support</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Warranty
