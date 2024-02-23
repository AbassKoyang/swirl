
const LandingPageBlogSkeleton = () => {
  return (
    <>
            <div className="w-full flex items-center justify-between">
              <div className="w-fit flex items-center">
                  <div className="flex gap-[10px] items-center lg:mr-[80px] 2xl:mr-[100px]">
                    <div className="size-[60px] 2xl:size-20 rounded-full bg-white/35 animate-pulse">
                    </div>
                    <div className="">
                      <h4 className='w-[150px] lg:w-[200px] h-5 2xl:w-[350px] 2xl:h-6 bg-white/35 animate-pulse mb-2 lg:mb-4 rounded-3xl'></h4>
                      <p className='w-[120px] lg:w-[180px] h-3 2xl:w-[300px] 2xl:h-4 bg-white/35 animate-pulse rounded-3xl'></p>
                    </div>
                  </div>

                <div className="hidden lg:flex flex-col">
                  <h5 className='lg:h-5 lg:w-40 2xl:h-9 2xl:w-52 lg:rounded-3xl bg-white/35 animate-pulse lg:mb-6  2xl:mb-[30px]'></h5>
                  <h3 className='lg:h-7 lg:w-60 2xl:h-12 2xl:w-72 lg:rounded-3xl bg-white/35 animate-pulse backdrop:lg:mb-[6px] mb-[10px]'></h3>
                  <p className='lg:h-3 lg:w-80 2xl:h-7 2xl:w-[350px] lg:rounded-3xl bg-white/35 animate-pulse lg:mb-6 mb-[30px]'></p>

                  <div className="flex gap-[6px] lg:gap-2 2xl:gap-[10px]">
                    <div className='lg:h-9 lg:w-20 2xl:h-12 2xl:w-24 lg:rounded-3xl bg-white/35 animate-pulse'>
                    </div>
                    <div className='lg:h-9 lg:w-20 2xl:h-12 2xl:w-24 lg:rounded-3xl bg-white/35 animate-pulse'>
                    </div>
                    <div className='lg:h-9 lg:w-20 2xl:h-12 2xl:w-24 lg:rounded-3xl bg-white/35 animate-pulse'>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-28 h-14 bg-white/35 animate-pulse rounded-xl'></div>
            </div>

          <div className="flex lg:hidden flex-col">
            <h5 className='lg:h-4 lg:w-8 2xl:h-6 2xl:w-12 lg:mb-6  2xl:mb-[30px]'></h5>
            <h3 className='lg:h-6 lg:w-12 2xl:h-8 2xl:w-15 lg:mb-[6px] mb-[10px]'></h3>
            <p className='lg:h-3 lg:w-16 2xl:h-5 2xl:w-20 lg:mb-6 mb-[30px]'></p>

            <div className="flex gap-[6px] lg:gap-2 2xl:gap-[10px]">
              <div className='h-8 w-20 rounded-3xl bg-white/35 animate-pulse'>
              </div>
              <div className='h-8 w-20 rounded-3xl bg-white/35 animate-pulse'>
              </div>
              <div className='h-8 w-20 rounded-3xl bg-white/35 animate-pulse'>
              </div>
            </div>
          </div>
          </>
  )
}

export default LandingPageBlogSkeleton