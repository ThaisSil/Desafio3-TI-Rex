
const MainSection = () => {
  return (
    <div  className="flex flex-col justify-between items-center bg-cover bg-center lg:flex-row md:h-[644px]"
    style={{ backgroundImage: `url(https://imagens-jsonserver.s3.us-east-1.amazonaws.com/MainImage.png)` }}>
        <div className=' w-[643px] h-[443px] bg-[#FFF3E3] border-2 rounded-[10px] pt-[62px] px-14 ml-auto mr-14'>
          <p className='font-semibold align-top text-left text-[#333333]'>New Arrival</p>
          <p className='font-bold text-[#B88E2F] text-left text-[52px]'>Discover Our New Collection</p>
          <p className='text-[#333333] font-medium text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='font-bold text-white bg-[#B88E2F] w-[222px] h-[74px] gap-[10px] mt-[46px]'>BUY NOW</button>
        </div>
    </div>
  )
}

export default MainSection
