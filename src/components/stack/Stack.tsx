import { BsGit } from 'react-icons/bs';
import { AiOutlineGithub, AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoSass, BiLogoTypescript, BiLogoTailwindCss } from 'react-icons/bi';



const Stack = () => {
  return (
    <div className='container p-2 my-16'>
      <h1 className='text-4xl text-center my-6'>My Stack</h1>
      <div className=' flex flex-wrap gap-4 justify-center content-center'>
        <p className=' p-4 text-sm m-3'><BsGit className=" text-3xl self-center mb-2 text-sky-600"/> Git</p>
        <p className=' p-4 text-sm m-3'><AiOutlineGithub className=" text-3xl self-center mb-2 text-sky-600"/> GitHub</p>
        <p className=' p-4 text-sm m-3'><AiFillHtml5 className=" text-3xl self-center mb-2 text-sky-600" /> HTML5</p>
        <p className=' p-4 text-sm m-3'><BiLogoCss3 className=" text-3xl self-center mb-2 text-sky-600" /> Css3</p>
        <p className=' p-4 text-sm m-3'><BiLogoJavascript className=" text-3xl self-center mb-2 text-sky-600" /> JavaScript</p>
        <p className=' p-4 text-sm m-3'><BiLogoReact className=" text-3xl self-center mb-2 text-sky-600" /> React</p>
        <p className=' p-4 text-sm m-3'><BiLogoSass className=" text-3xl self-center mb-2 text-sky-600" /> SASS</p>
        <p className=' p-4 text-sm m-3'><BiLogoTypescript className=" text-3xl self-center mb-2 text-sky-600" /> Typescript</p>
        <p className=' p-4 text-sm m-3'><BiLogoTailwindCss className=" text-3xl self-center mb-2 text-sky-600" /> Tailwind</p>
      </div>
      <div className="container flex justify-center content-center mt-5">
        <a href="#" className="m-2 border border-sky-600 py-2 px-4">Download CV</a>
        <a href="#" className="m-2 border border-sky-600 py-2 px-4">Hire Me</a>
      </div>
    </div>
  )
}

export default Stack;