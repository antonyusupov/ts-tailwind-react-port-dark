import { SiAffinitydesigner } from 'react-icons/si';
const Home = () => {
  return (
    <div className="container mt-10 mb-14 p-4 lg:flex justify-center content-center my-3 h-2/3 w-screen">
      <div className='flex justify-center content-center flex-col my-7'>
        <div className="relative lg:rotate-90 group cursor-pointer transition duration-200">
          <p className='-inset-0.5 absolute lg:-inset-3 bg-gradient-to-r from-pink-900 to-sky-900 py-3 px-2 blur-md rounded-2xl'></p>
          <p className=" relative uppercase text-center py-1 px-2 tracking-widest text-2xl rounded bg-black">Designer</p>
        </div>
      </div>
      <div className="container lg: ml-11 flex flex-col justify-between m-auto content-center">
        <div className=' flex flex-col justify-evenly content-center lg:flex-row place-items-center'>
          <p className=' text-4xl flex justify-center place-items-center text-center my-10'>{<SiAffinitydesigner />}</p>
          <h1 className=" w-2/3 text-xl md:w-full md:text-5xl lg:my-11 lg:ml-7 lg:w-2/3 ">We design experiences that move <span className=' uppercase text-sky-600'>businesses</span> to the <span className=' uppercase text-pink-600'>future</span></h1>
        </div>
        <div className='mt-6 flex justify-around content-center m-auto  w-full'>
          <a className=' border-white border py-2 px-4 lg: my-11' href="#">Showcase</a>
          <a className=' border-white border py-2 px-4 lg: my-11' href="#">About Me</a>
          <div className='relative'>
          <div className=' hidden lg:-inset-0 w-4 py-4 bg-pink-800 blur-md rounded-full'></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home;