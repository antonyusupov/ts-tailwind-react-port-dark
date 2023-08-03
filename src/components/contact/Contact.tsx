import { AiFillGithub, AiFillDribbbleCircle, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="container px-2 flex flex-col lg:grid grid-cols-2 justify-between content-center">
      <div className="my-4">
      <h2 className=" text-center text-4xl my-8">Contact</h2>
        <form className="flex flex-col">
          <input className="border border-white bg-transparent mt-2 outline-none px-2" type="email" placeholder="Email"/>
          <input className="border border-white bg-transparent mt-2 outline-none px-2" type="text" placeholder="Name"/>
          <textarea className="border border-white bg-transparent mt-2 resize-none outline-none px-2" placeholder="Message"></textarea>
          <a className=" outline-none self-center py-2 px-3 border border-white mt-5 ">Submit </a>
        </form>
      </div>
      <div className=' mt-16 '>
        <div className=''>
          <h3 className=' text-center text-xl my-6'>Your business will never be the same <span className=' uppercase text-pink-600'>again</span></h3>
          <p className=' lg:text-center text-sm text-sky-600 ml-8'>Check me out on <span className=' text-lg text-pink-600 ml-4'>Social</span></p>
        </div>
        <div className='flex justify-between px-8 my-11'>
          <p className=' p-1 text-xl'><AiFillLinkedin /></p>
          <p className=' p-1 text-xl'><AiFillDribbbleCircle /></p>
          <p className=' p-1 text-xl'><AiFillTwitterCircle /></p>
          <p className=' p-1 text-xl'><AiFillGithub /></p>
        </div>
      </div>
    </div>
  )
}

export default Contact;