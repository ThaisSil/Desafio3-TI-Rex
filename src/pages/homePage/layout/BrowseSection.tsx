

const BrowseSection = () => {
  return (
    <div className='w-[1183px] h-[685px] mx-32'>
      <div className='flex flex-col items-center justify-center my-14'>
        <p className='text-[#333333] font-bold text-[32px] '>Browse The Range</p>
        <p className='text-[#666666] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-row justify-between gap-5'>
        <div>
            <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Dining.png' alt="dining"/>
            <p className='font-semibold text-2xl text-center text-[#333333] p-7'>Dining</p>
        </div>
        <div>
            <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Living.png' alt="living" />
            <p className='font-semibold text-2xl text-center text-[#333333] p-7'>Living</p>
        </div>
        <div>
            <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Bedroom.png' alt="bedroom" />
            <p className='font-semibold text-2xl text-center text-[#333333] p-7'>Bedroom</p>
        </div>
        </div>
      
    </div>
  )
}

export default BrowseSection
