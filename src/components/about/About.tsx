import { useEffect, useState } from "react";

const About = () => {
  const imageUrl = "https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXQlMjB1c3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

  const useDeviceSize = () => {
    const [width, setWidth] = useState(0);

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    }

    useEffect(() => {
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    },[]) 

    return width;
  }

  const dynamicWidth = useDeviceSize();

  const aboutDiv = document.querySelector('#About');
  switch(dynamicWidth <= 768) {
    case true:
      aboutDiv?.classList.add('bg-sky-900')
      break
    case false:
      aboutDiv?.classList.remove('bg-sky-900')
      break
  }


  return (
    <div className=" my-12 p-4 flex flex-col place-items-center gap-8 w-full" id="About">
      <h2 className=" text-4xl md:text-5xl lg:my-14 text-center tracking-widest">About Me</h2>
      <div className=" ">
        <img className=" object-center rounded-l-full rounded-r-full" src={imageUrl} alt="info" />
      </div>
      <div className=" flex flex-col items-center lg:px-12">
        <h4 className=" text-4xl text-center my-4">Marco Pierre</h4>
        <p className=" flex items-center justify-center my-8 leading-8 tracking-widest text-sm text-center md:w-2/3 lg:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorem modi unde enim necessitatibus. Laboriosam blanditiis voluptatibus provident? Id, tempore et ipsum maiores minima eius!</p>
        <a className="border border-sky-600 py-2 px-4 my-5" href="#">Contact Me</a>
      </div>
    </div>
  )
}

export default About;